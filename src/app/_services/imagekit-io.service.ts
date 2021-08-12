import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../environments/environment'; 
import { GamesService } from './games.service';

@Injectable({
  providedIn: 'root'
})

export class ImagekitIoService {
  
  constructor(private http: HttpClient,
              private gameService: GamesService) { }

            
  transformations = {
    thumbnail: [{
      w: 300,
      h: 300}],
    previewImage: [{
      w: 300,
      h: 300}],
    bannerImage: [{
      w: 300,
      h: 300}],
    featureImage: [{
      w: 300,
      h: 300}],
    video: [{
      w: 300,
      h: 300}],
    bannerVideo: [{
      w: 300,
      h: 300}],
  }

  transformationQueries:any = {
    thumbnail: "thumbnail",
    previewImage: "tr:w-1000,h-1000",
    bannerImage: "tr:w-780,h-300,cm-extract,fo-center",
    featureImage: "tr:w-1000,h-1000",
    video: "video",
    bannerVideo: "bannerVideo",
  }

  getMediaTypeTransformation(type: string){
    switch (type) {
      case 'thumbnail':
        return this.transformations.thumbnail;
        break;
      case 'previewImage':
        return this.transformations.previewImage;
        break;
      case 'bannerImage':
        return this.transformations.bannerImage;
        break;
      case 'featureImage':
        return this.transformations.featureImage;
        break;
      case 'video':
        return this.transformations.video;
        break;
      case 'bannerVideo':
        return this.transformations.bannerVideo;
        break;
      default:
        return console.log('No media type selected!');
        break;
    }
  }

  attachTransformQuery(imageUrl: string, transformAlias:string){
    let locArr = imageUrl.split('/');
    let segementFound: boolean = false;
    locArr.forEach((segment, index) =>{
      if(segment == 'xpiswqmgdc6' && !segementFound){
      locArr.splice(index + 1,0,this.transformationQueries[transformAlias]);
    }});
    // console.log('Optimize me!!!!!! This is the new source string',locArr.join('/'));
    return locArr.join('/');
  }
 
  uploadMyImageRecursive(gameForm: any, requestsComplete: any){
    //on 1st iteration it will be the gameform the user created, the other iterations will have the data with the imagekit url
    let updatedGameForm = gameForm; 
    let selectedFile = updatedGameForm.featureImages[requestsComplete];
    const reader = new FileReader();

    if (requestsComplete !== gameForm.featureImages.length){
      if(typeof gameForm.featureImages[requestsComplete] != 'string'){ //we check to see if the element at gameForm.featureImages[requestsComplete] is a string. If it is then the user did not choose a replacement file so the element still has the old image url
        reader.readAsDataURL(selectedFile);     //this converts the image into a base64 type
        reader.onload = async () => {
          await this.http.post(`${API_URL}/imagekit/upload`, {
            encoded_file: reader.result,
            encoded_file_name: selectedFile.name
          }).toPromise().then((res) => {
            updatedGameForm.featureImages[requestsComplete] = res;
            requestsComplete++;
            this.uploadMyImageRecursive(updatedGameForm, requestsComplete);
            return
          });
        }
      }
      else{
        requestsComplete++;
        this.uploadMyImageRecursive(updatedGameForm, requestsComplete);
        return
      }
    }
    else if(requestsComplete === gameForm.featureImages.length){
      if(this.gameService.isEditing){
        return this.gameService.submitEditedGame(updatedGameForm);
      }
      else{
        return this.gameService.createGame(updatedGameForm);
      }
    }
    return console.log('exiting an recursive iteration');
  }
}

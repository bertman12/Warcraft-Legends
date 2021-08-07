import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImagekitioAngularModule } from 'imagekitio-angular';
import { IkImageComponent } from 'imagekitio-angular';
import { IkUploadComponent } from 'imagekitio-angular';
import { ImageKitConfiguration } from 'imagekitio-angular/imagekitio-angular/imagekit.service';
import { API_URL } from '../../environments/environment'; 


@Injectable({
  providedIn: 'root'
})

export class ImagekitIoService {

  constructor(private http: HttpClient) { }
 
convertImageToB64(selectedFile:any){
  const reader = new FileReader();
  return reader.readAsDataURL(selectedFile);
}

uploadMyImage(selectedFile: any) {
  const reader = new FileReader();
  reader.readAsDataURL(selectedFile);     //this converts the image into a base64 type
  console.log('preparing to do onload');
  reader.onload = () => {
    // console.log(reader.result);
    this.http.post(`${API_URL}/imagekit/upload`, {
        encoded_file: reader.result,
        encoded_file_name: selectedFile.name
      }).toPromise().then((res) => {console.log('this is the resposne from the upload ...', res);});
  }}


  //on successful upload handle the 200 response and store the image path in the database

  //make request for authorization endpoint to backend for a signature to use for client side uploading


// Upload function internally uses the ImageKit.io javascript SDK

  //after user uploads image ??make a request to get the url of the image?? or get the url from the response after making the upload request


}

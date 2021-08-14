import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormControl } from '@angular/forms';
import { GamesService } from 'src/app/_services/games.service';
import { Validators } from '@angular/forms';
import { ImagekitIoService } from 'src/app/_services/imagekit-io.service';
import { Game } from 'src/app/_models/game.model';


@Component({
  selector: 'app-modify-game-list',
  templateUrl: './modify-game-list.component.html',
  styleUrls: ['./modify-game-list.component.css']
})



// when this component in instantiated from the edit button we will use .setValue method to grab the game object data and input it in there to make it easier to edit the list item
export class ModifyGameListComponent implements OnInit {
  
  constructor(private formBuilder: FormBuilder,
              public gameService: GamesService,
              private imagekitService: ImagekitIoService){}

  selectedGame!: any;              
  ngOnInit(): void {
    this.gameService.editingGame.subscribe(
      (game) => {
        this.selectedGame = game;
        this.gameForm.patchValue(game);
        this.featureDescriptions.clear();
        this.featureImages.clear();
        //add the feature descriptions and image form controls from the game currently being edited
        for(let x = 0; x < game.featureDescriptions.length; x++){
          this.featureDescriptions.push(this.formBuilder.control(game.featureDescriptions[x]));
          this.featureImages.push(this.formBuilder.control(game.featureImages[x]));
        }
    });
  }
  
  gameForm = this.formBuilder.group({
    id: [],
    title: ['', Validators.required],
    author: ['', Validators.required],
    description: ['', Validators.required],
    featureDescriptions: this.formBuilder.array([['', [Validators.required, Validators.minLength(1)]]],[ Validators.required, Validators.minLength(1)]),
    featureImages: this.formBuilder.array(['']),
    genre: ['', Validators.required],
    version: ['', [Validators.required]],
    rating: ['',[Validators.required, Validators.max(5), Validators.min(0)]],
    publishDate: this.formBuilder.group({
      month: ['', Validators.required],
      day: ['', [Validators.required, Validators.max(31)]],
      year: ['', [Validators.required, Validators.max(2021)]],
    }),
    videoSrc: [''],
    imgSrc: ['']
  })
  
  get featureDescriptions():FormArray {
    return this.gameForm.get('featureDescriptions') as FormArray;
  }
  get featureImages():FormArray {
    return this.gameForm.get('featureImages') as FormArray;
  }
  
  onModalClose(){
    this.gameForm.reset();
    this.featureDescriptions.clear();
    this.featureImages.clear();
  }
  
  addFeature(){
    this.featureImages.push(this.formBuilder.control(''));
    this.featureDescriptions.push(this.formBuilder.control('',[Validators.required, Validators.minLength(1)]));
    this.featureImages.updateValueAndValidity();
    this.featureDescriptions.updateValueAndValidity();
  }

  removeFeature(index:number){
    let response = confirm('Are you sure you want to delete gameplay feature?');
    if(response === true){
      this.featureImages.removeAt(index);
      this.featureDescriptions.removeAt(index);
    }
  }
  
  onSubmit(){
    this.imagekitService.uploadMyImageRecursive(this.gameForm.value, 0);
  }
  
  onClearForm(){
    this.gameForm.reset();
    this.featureDescriptions.clear();
    this.featureImages.clear();
    this.selectedGame = null;
  }

  //used to upload feature images
  onImageUpload(event: any, uploader:string, index?: any, ){
    let selectedFile = event.target.files[0];
    if(uploader === 'featureImageUpload'){
      this.featureImages.at(index).setValue(selectedFile);
      console.log(`${uploader} image selected...`, selectedFile);
    }
  }

  //the event input from the html tag is the api response from imagekit.io
  //get media url from repsponse for preview image and gameplay video
  handleUploadSuccess(res:any, uploader:string){
    console.log('File upload success with response: ', res);
    if(uploader === 'videoUpload'){
      let videoUpload = this.gameForm.get('videoSrc') as FormControl;
      videoUpload.setValue(res.url);
      console.log('This is the response from the video upload',res.url);
    }
    if(uploader === 'previewImageUpload'){
      let previewImage = this.gameForm.get('imgSrc') as FormControl;
      previewImage.setValue(res.url);
    }
  }

  handleUploadError(res:any){
    console.log('File upload error with response: ', res);
    alert('File size must be under 25MB');
  }

}

  
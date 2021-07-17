import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormArrayName, FormControl, AbstractControl } from '@angular/forms';
import { GamesService } from 'src/app/_services/games.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-modify-game-list',
  templateUrl: './modify-game-list.component.html',
  styleUrls: ['./modify-game-list.component.css']
})
export class ModifyGameListComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private gameService: GamesService) { }
    
    ngOnInit(): void {
      this.gameService.editingGame.subscribe(
        (game) => {
          this.gameForm.patchValue(game);
          this.featureDescriptions.clear();
          this.featureImages.clear();
          for(let x = 0; x < game.featureImages.length; x++){
            this.featureDescriptions.push(this.formBuilder.control(game.featureDescriptions[x]));
            this.featureImages.push(this.formBuilder.control(game.featureImages[x]));
          }
      })
    }
    
    gameForm = this.formBuilder.group({
      id: [],
      title: [''],
      author: [''],
      description: [''],
      featureDescriptions: this.formBuilder.array([
      ]),
      featureImages: this.formBuilder.array([
      ]),
      genre: [''],
      version: [''],
      rating: [''],
      publishDate: this.formBuilder.group({
        month: [''],
        day: [''],
        year: [''],
      }),
      videoSrc: [''],
      imgSrc: ['']
    })
    
    //instantiating form array class properties
    get featureDescriptions(){
      return this.gameForm.get('featureDescriptions') as FormArray;
    }
    get featureImages(){
      return this.gameForm.get('featureImages') as FormArray;
    }
    
    addFeatureImage(){
      this.featureImages.push(this.formBuilder.control(''));
      this.featureDescriptions.push(this.formBuilder.control(''));
    }
    
    onSubmit(){
      console.warn(this.gameForm.value);
      if(this.gameService.isEditing){
        this.gameService.submitEditedGame(this.gameForm.value);
      }
      else{
        this.gameService.addGame(this.gameForm.value);
      }
    }
    
    onClearForm(){
      this.gameForm.reset();
      this.featureDescriptions.clear();
      this.featureImages.clear();
    }
    // when this component in instantiated from the edit button we will use .setValue method to grab the game object data and input it in there to make it easier to edit the list item
  }
  
  
  
  // without form array
  // gameForm = this.formBuilder.group({
    //   id: [0],
    //   title: ['', Validators.required],
    //   author: [''],
    //   description: [''],
    //   featureDescriptions: [''],
    //   featureImages: [''],
    //   genre: [''],
    //   version: [''],
//   rating: [''],
//   publishDate: this.formBuilder.group({
//     month: [''],
//     day: [''],
//     year: [''],
//   }),
//   videoSrc: [''],
//   imgSrc: ['']
// })
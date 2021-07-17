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
      //deos this need to be done in another lifecycle hook?
      this.gameService.editingGame.subscribe(
        (game) => {
          this.gameForm.patchValue(game);
          console.log('feature descriptions controls =>', this.featureDescriptions.controls, '\nfeature description controls length', this.featureDescriptions.controls.length);
          // for(let y = 0; y <= this.featureDescriptions.controls.length; y++){
            // this.featureDescriptions.removeAt(0);
            // this.featureImages.removeAt(0);
          // }
        //were pushing a form control with the value in the games property array at x 
        for(let x = 0; x < game.featureImages.length; x++){
          this.featureDescriptions.push(this.formBuilder.control(game.featureDescriptions[x]));
          this.featureImages.push(this.formBuilder.control(game.featureImages[x]));
        }
        console.log('Editing value of the form group.', this.gameForm.value);
      }
      )
      
    }
    
    gameForm = this.formBuilder.group({
      id: [0],
      title: [''],
      author: [''],
      description: [''],
      featureDescriptions: this.formBuilder.array([
        this.formBuilder.control('')
      ]),
      featureImages: this.formBuilder.array([
        this.formBuilder.control('')
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
      //Here we will check if user is editing for adding a game
      if(this.gameService.isEditing){
        this.gameService.submitEditedGame(this.gameForm.value);
      }
      else{
        this.gameService.addGame(this.gameForm.value);
      }
    }
    
    onClearForm(){
      this.gameForm.reset();
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
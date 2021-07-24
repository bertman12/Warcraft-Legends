import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { GamesService } from 'src/app/_services/games.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-modify-game-list',
  templateUrl: './modify-game-list.component.html',
  styleUrls: ['./modify-game-list.component.css']
})

// when this component in instantiated from the edit button we will use .setValue method to grab the game object data and input it in there to make it easier to edit the list item
export class ModifyGameListComponent implements OnInit {
  
  constructor(private formBuilder: FormBuilder,
              private gameService: GamesService){}

  ngOnInit(): void {
    this.gameService.editingGame.subscribe(
      (game) => {
        this.gameForm.patchValue(game);
        this.featureDescriptions.clear();
        this.featureImages.clear();
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
    featureImages: this.formBuilder.array([['', [ Validators.required, Validators.minLength(1)]]],[ Validators.required, Validators.minLength(1)]),
    genre: ['', Validators.required],
    version: ['', Validators.required],
    rating: [''], //this will be calculated
    publishDate: this.formBuilder.group({
      month: ['', Validators.required],
      day: ['', [Validators.required, Validators.max(32)]],
      year: ['', [Validators.required, Validators.max(2021)]],
    }),
    videoSrc: ['',Validators.required],
    imgSrc: ['',Validators.required]
  })
  
  get featureDescriptions(){
    return this.gameForm.get('featureDescriptions') as FormArray;
  }
  get featureImages(){
    return this.gameForm.get('featureImages') as FormArray;
  }
  
  onModalClose(){
    this.gameForm.reset();
    this.featureDescriptions.clear();
    this.featureImages.clear();
    this.gameService.isEditing = false;
  }
  
  addFeature(){
    this.featureImages.push(this.formBuilder.control('',[Validators.required, Validators.minLength(1)]));
    this.featureDescriptions.push(this.formBuilder.control('',[Validators.required, Validators.minLength(1)]));
    this.featureImages.updateValueAndValidity();
    this.featureDescriptions.updateValueAndValidity();
  }

  removeFeature(index:number){
    this.featureImages.removeAt(index);
    this.featureDescriptions.removeAt(index);
  }
  
  onSubmit(){
    if(this.gameService.isEditing){
      this.gameService.submitEditedGame(this.gameForm.value)
      .then(
        ()=>{
        this.gameService.getGames().then((games)=>{
          this.gameService.gameListModified.next(games);
        })},
      );
    }
    else{
      this.gameService.createGame(this.gameForm.value)
      .then(()=>{
        this.gameService.getGames().then((games)=>{
          this.gameService.gameListModified.next(games);
        })
      });
    }
  }
  
  onClearForm(){
    this.gameForm.reset();
    this.featureDescriptions.clear();
    this.featureImages.clear();
  }

}
  
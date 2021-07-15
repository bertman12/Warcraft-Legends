import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
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
        this.gameForm.setValue(game);
        console.log('Editing value of the form group.');
        console.log(this.gameForm.value);
      }
    )
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
  
  //with form array
  gameForm = this.formBuilder.group({
    id: [0],
    title: ['', Validators.required],
    author: [''],
    description: [''],
    features: this.formBuilder.array([{
      featureDescriptions: this.formBuilder.control(''),
      featureImages: this.formBuilder.control('')
    }
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

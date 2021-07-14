import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { GamesService } from 'src/app/_services/games.service';

@Component({
  selector: 'app-modify-game-list',
  templateUrl: './modify-game-list.component.html',
  styleUrls: ['./modify-game-list.component.css']
})
export class ModifyGameListComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private gameService: GamesService) { }

  ngOnInit(): void {
  }

  gameForm = this.formBuilder.group({
    title: [''],
    author: [''],
    description: [''],
    featureDescriptions: [''],
    featureImages: [''],
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
    this.gameService.addGame(this.gameForm.value);
  }

  // when this component in instantiated from the edit button we will use .setValue method to grab the game object data and input it in there to make it easier to edit the list item
}

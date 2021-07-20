import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../_services/games.service';
import { Game } from '../models/game.model';
@Component({
  selector: 'app-game-review',
  templateUrl: './game-review.component.html',
  styleUrls: ['./game-review.component.css']
})
export class GameReviewComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
    private gameService: GamesService) { }
  game:Game = {
    id: 0,  
    title: "Uther Party", 
    author: "guy",
    description: "classic warcraft 3 game",
    featureDescriptions: [''],
    featureImages: [''],
    genre: 'Mini Games',
    version: '10.0',
    rating: '5',
    publishDate: {month: "January", day: 1, year: 2005},
    videoSrc: "",
    imgSrc: "" };
    
  ngOnInit(): void {
    console.log("THESE ARE THE ID:");
    console.log(this.route.snapshot.params['id']);
    this.gameService.getSelectedGame().subscribe((data)=>{
      this.game = data;
    })
    // this.game = this.gameService.getSelectedGame(this.route.snapshot.params['id']);
  }

}

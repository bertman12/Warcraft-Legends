import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../_services/games.service';

@Component({
  selector: 'app-game-review',
  templateUrl: './game-review.component.html',
  styleUrls: ['./game-review.component.css']
})

export class GameReviewComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
              private gameService: GamesService){}
  // game:Game = {
  //   id:0,
  //   title: "Legion Tower Defense",
  //   author: "Lisk",
  //   description: "This game is a mix between a tower defense and a wave defense. You control a builder that has to build non controllable units to defend your king. Your resources are limited so you can strategize to save for more expensive units while being weak for the current round and securing the next rounds, or if you fear losing you can build cheaper units to get by. The game has gained so much popularity that it was remade and sold on Steam as Legion Tower Defense 2.",
  //   featureDescriptions: [
  //    "Feature Description 1",
  //    "Feature Description 2",
  //    "Feature Description 3"
  //    ],
  //   featureImages: [
  //    "../../assets/Warcraft-III-generic-image-half-size.png",
  //    "../../arthas-evil-hr-flipped.jpg",
  //    "../../orc-hr.jpg"
  //    ],
  //   genre: "Tower Defense/Wave Defense",
  //   version: 3.41,
  //   rating: 5,
  //   publishDate: {
  //    month: "January",
  //    day: 1,
  //    year: 2009
  //    },
  //   videoSrc: "../../assets/Action 7-3-2021 3-09-01 PM.mp4",
  //   imgSrc: "../../assets/Warcraft-III-generic-image-half-size.png"
  // };
  
  game!: any;
  ngOnInit(): void {
    window.scrollTo(0,0);
    this.gameService.getSelectedGame(this.route.snapshot.params['id']).then(
      (selectedGame) => {
      this.game = selectedGame;
      console.log('THIS IS THE SELECTED GAME', selectedGame);
      console.log('this is local selected game', this.game);
    });
  }
}


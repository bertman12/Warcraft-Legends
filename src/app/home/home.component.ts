import { Component, OnInit } from '@angular/core';
import { Game } from '../_models/game.model';
import { GamesService } from '../_services/games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private gameService: GamesService){}

  localGameArr: Game[] = [];
  imageKitURL:string = this.gameService.imageKitURL;
  ngOnInit(): void {
    this.gameService.getGames();
    this.gameService.gameListModified.subscribe((games)=> {
      this.localGameArr = games;
    });
    // this.gameService.getGames().then((games)=> {this.localGameArr = games;});
  }

  staggerMedia(index: number):string {
    if(index % 2 ===0){
      return "feature-container-right"
    }
    else{
      return "feature-container-left"
    }
  }
}

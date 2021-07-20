import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../models/game.model';
import { GamesService } from '../_services/games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private gameService: GamesService,
              private route: ActivatedRoute) { }

  // localGameArr: Game[] = this.gameService.getGames();
  localGameArr: Game[] = [];

  ngOnInit(): void {
    this.gameService.getGames().subscribe((games)=>{
      this.localGameArr = games;
    })
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

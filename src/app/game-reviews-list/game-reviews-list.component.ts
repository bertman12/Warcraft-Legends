import { Component, OnInit } from '@angular/core';
import { GamesService } from '../_services/games.service';
import { Game } from '../models/game.model';

@Component({
  selector: 'app-game-reviews-list',
  templateUrl: './game-reviews-list.component.html',
  styleUrls: ['./game-reviews-list.component.css']
})
export class GameReviewsListComponent implements OnInit {

  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
  }
}

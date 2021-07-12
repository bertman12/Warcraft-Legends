import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game.model';
import { GamesService } from 'src/app/_services/games.service';

@Component({
  selector: 'app-game-reviews-list-item',
  templateUrl: './game-reviews-list-item.component.html',
  styleUrls: ['./game-reviews-list-item.component.css']
})
export class GameReviewsListItemComponent implements OnInit {
  constructor(private gameService:GamesService) { }
  
  localGamesArr:Game[] = this.gameService.getGames();
  ngOnInit(): void {
  }
  onEdit(){
    alert("Route to edit component");
  }
  onDelete(){
    alert("Are you sure you want to delete review?\nEnter Admin password: [ - ]");
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Game } from 'src/app/models/game.model';
import { GamesService } from 'src/app/_services/games.service';

@Component({
  selector: 'app-game-reviews-list-item',
  templateUrl: './game-reviews-list-item.component.html',
  styleUrls: ['./game-reviews-list-item.component.css']
})
export class GameReviewsListItemComponent implements OnInit, OnDestroy {
  constructor(private gameService:GamesService) { }

  localGamesArr:Game[] = []

  ngOnInit(){
    //update local array on edit game
    this.gameService.getGames().subscribe((games)=> {
      this.localGamesArr = games;
    });
    this.gameService.gameListModified.subscribe(
      (gamez)=>{this.localGamesArr=gamez;}    
      );
  }

  ngOnDestroy(){
  }

  onEdit(game: Game){
    this.gameService.editGame(game);
  }

  onDelete(game: Game){
    confirm('Are you sure you want to delete game?');
    this.gameService.deleteGame(game.id).subscribe(()=>{
      this.gameService.getGames().subscribe((games)=>{
       this.gameService.gameListModified.next(games);
      })
    })
  
  }

}


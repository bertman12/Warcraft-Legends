import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Game } from 'src/app/_models/game.model';
import { GamesService } from 'src/app/_services/games.service';

@Component({
  selector: 'app-game-reviews-list-item',
  templateUrl: './game-reviews-list-item.component.html',
  styleUrls: ['./game-reviews-list-item.component.css']
})
export class GameReviewsListItemComponent implements OnInit, OnDestroy {
  constructor(private gameService:GamesService) { }
  
  
  localGamesArr:Game[] = [];
  private destroy$ = new Subject(); //used for unsubscribing from observables in ng OnDestroy
  
  async ngOnInit(){
    await this.gameService.getGames().then(
      (res) => {
        this.localGamesArr = res;
      }
    );
    
    this.gameService.gameListModified
    .pipe(takeUntil(this.destroy$))
    .subscribe((games) => {this.localGamesArr = games;});
  }

  onEdit(game: Game){
    this.gameService.editGame(game);
  }

  onNewGame(){
    this.gameService.isEditing = false;
  }
  
  async onDelete(game: Game){
    confirm('Are you sure you want to delete game?');
    await this.gameService.deleteGame(game.id);
    
  }

  ngOnDestroy(){
  this.destroy$.next();
  this.destroy$.complete();
  }

}


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
  
  // localGamesArr:Game[] = this.gameService.getGames();
  

  localGamesArr:Game[] = []
  ngOnInit(): void {
    // this.gameService.gameListModified.subscribe(
    //   () => this.localGamesArr = this.gameService.getGames()
    // );
    this.gameService.getGames().subscribe((games)=> {
      console.log('This is what i get from the get games function that returns an observable: ', games);
      this.localGamesArr = games;
    });
  }


  onEdit(game: Game){
    this.gameService.editGame(game);
  }

  //WITHOUT API
  // onDelete(game: Game){
  //   confirm('Are you sure you want to delete game?');
  //   this.gameService.deleteGame(game);
  // }
}

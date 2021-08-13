import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/_models/game.model';
import { User } from 'src/app/_models/userInterface';
import { GamesService } from 'src/app/_services/games.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-game-reviews-list-item',
  templateUrl: './game-reviews-list-item.component.html',
  styleUrls: ['./game-reviews-list-item.component.css']
})
export class GameReviewsListItemComponent implements OnInit {
  constructor(private gameService:GamesService,
              private userService: UserService) { }
  
  localGamesArr:Game[] = [];
  currentUser!: User;
  ngOnInit(){
    this.userService.currentUser.subscribe((user: User) =>
      {
        this.currentUser = user; 
      });
  // let currentUser = this.userService.getUser({email: 'admin@admin.com'});
  //   console.log('THIS IS THE USER',currentUser);
    this.gameService.getGames();
    this.gameService.gameListModified.subscribe((games)=> {
      this.localGamesArr = games;
    });
  }

  getStarsArray(index: number){
    const locArr = [];
    for(let x = 0; x < this.localGamesArr[index].rating; x++){
      locArr.push(0);
    }
    return locArr;
  }

  onEdit(game: Game){
    this.gameService.editGame(game);
  }

  onNewGame(){
    this.gameService.isEditing = false;
  }
  
  onDelete(game: Game){
    let response = confirm('Are you sure you want to delete game?');
    if(response === true){
      this.gameService.deleteGame(game.id);
    }
  }
}


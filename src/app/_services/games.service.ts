import { Injectable, OnInit } from '@angular/core';
import { Game } from '../_models/game.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GamesService implements OnInit{

  gameListModified = new Subject<Game[]>();
  editingGame = new Subject<Game>();
  isEditing: boolean = false;

  private gamesUrl = 'api/gameListDB/';

  constructor(private http: HttpClient) { }
  numberOfGames: number = 0;
  
  ngOnInit(){
  }

  getGames(){
    return this.http.get<Game[]>(this.gamesUrl).toPromise();
  }

  async createGame(Game: Game) {
    Game.videoSrc = "../../assets/Action 7-3-2021 3-09-01 PM.mp4";
    Game.imgSrc = "../../assets/Warcraft-III-generic-image-half-size.png";
    this.getGames().then(
      (games) => {
        Game.id = games.length;
      }
    )
    this.isEditing = false;

    return this.http.post<Game>(this.gamesUrl, Game).toPromise();
  }

  editGame(Game: Game){
    this.isEditing = true;
    this.editingGame.next(Game);
  }

  async submitEditedGame(Game:Game){
    this.isEditing = false;
    this.getGames().then((games) => {
      this.gameListModified.next(games);
    });
    await this.http.put(this.gamesUrl + Game.id, Game).toPromise();
  }

  async deleteGame(id: number){
    await this.http.delete(this.gamesUrl + id).toPromise();
    this.getGames().then((games) => {
      this.gameListModified.next(games);
    });
  }

  getSelectedGame(id: number){
    return this.http.get(this.gamesUrl + id);
  }
}

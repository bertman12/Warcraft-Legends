import { Injectable, OnInit } from '@angular/core';
import { Game } from '../_models/game.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { API_URL } from '../../environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class GamesService implements OnInit{

  gameListModified = new Subject<Game[]>();
  editingGame = new Subject<Game>();
  isEditing: boolean = false;

  private gamesUrl = 'api/gameListDB/';
  private temp_jwt = 
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsInVzZXJuYW1lIjoiYmVubnkiLCJuYW1lIjoiYmVubnkiLCJlbWFpbCI6ImJlbm55QGJlbm55LmNvbSIsImFnZSI6NjksImxvY2F0aW9uIjo2OTY5NjksImlhdCI6MTYyNzQ1NDgzMH0.P40BsHrPynA9ZsBdwp974tBFeBMYvG6laJnuAwbaylM"
  ;

  constructor(private http: HttpClient) { }
  
  ngOnInit(){
  }

  async getGames(){
    console.log('getGames() has been called!');
    await this.http.get<Game[]>(`${API_URL}/game-reviews-list`).toPromise().then(
      (games) => {
        this.gameListModified.next(games);
      }
    );
  }

  createGame(Game: Game) {
    Game.videoSrc = "../../assets/Action 7-3-2021 3-09-01 PM.mp4";
    Game.imgSrc = "../../assets/Warcraft-III-generic-image-half-size.png";

    let tempGame;
    //we need to remove the feature descriptions and images array
    this.isEditing = false;
    return this.http.post<Game>(`${API_URL}/game-reviews-list/create`, {body: Game}, {headers: {"Authorization": `Bearer ${this.temp_jwt}`, "Content-Type": "application/json"}})
    .toPromise().then((res) => {this.getGames();});
    
  }

  editGame(Game: Game){
    this.isEditing = true;
    this.editingGame.next(Game);
  }

  submitEditedGame(Game:Game){
    this.isEditing = false;
    
    this.http.put(this.gamesUrl + Game.id, Game).toPromise().then(
      (rex) => {
      this.getGames();});
  }

  //in the backend i can have the delete request send back a resposne with the new modified gamelist. to reduce the number of outgoing requests
  deleteGame(id: number){
    console.log('HERE IS THE ID',id);
    this.http.delete(`${API_URL}/game-reviews-list/delete/${id}`, {headers: {"Authorization": `Bearer ${this.temp_jwt}`, "Content-Type": "application/json"}}).toPromise();
    this.getGames();
  }

  async getSelectedGame(id: number){
    await this.http.get(`${API_URL}/game-reviews-list/${id}`).toPromise();
  }
}

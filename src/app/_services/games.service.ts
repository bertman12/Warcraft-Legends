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
        console.log('I got the game reviews', games);
        this.gameListModified.next(games);
      }
    );
  }

  async createGame(Game: Game) {
    Game.videoSrc = "../../assets/Action 7-3-2021 3-09-01 PM.mp4";
    Game.imgSrc = "../../assets/Warcraft-III-generic-image-half-size.png";
    Game.rating = '5';
    console.log('this is the game i am submitting', Game);
    this.isEditing = false;

    await this.http.post<Game>(`${API_URL}/game-reviews-list/mod/create`, Game, {headers: {"Authorization": `Bearer ${this.temp_jwt}`, "Content-Type": "application/json"}})
    .toPromise()
    .then((res)=>{
      this.getGames();
    })
    .catch( (err) => {
      console.error(err);
    }
    );
  }


  editGame(Game: Game){
    this.isEditing = true;
    this.editingGame.next(Game);
  }

  async submitEditedGame(Game:Game){
    this.isEditing = false;
    await this.http.put(`${API_URL}/game-reviews-list/mod/edit/${Game.id}`, Game, {headers: {"Authorization": `Bearer ${this.temp_jwt}`, "Content-Type": "application/json"}}).toPromise().then(
      (res) => {
      this.getGames();
    });
  }

  //in the backend i can have the delete request send back a resposne with the new modified gamelist. to reduce the number of outgoing requests
  deleteGame(id: number){
    console.log('HERE IS THE ID',id);
    this.http.delete(`${API_URL}/game-reviews-list/mod/delete/${id}`, {headers: {"Authorization": `Bearer ${this.temp_jwt}`, "Content-Type": "application/json"}}).toPromise();
    this.getGames();
  }

   getSelectedGame(id: number){
    console.log('We are getting this game by id...', id);
    return this.http.get(`${API_URL}/game-reviews-list/${id}`).toPromise();
  }
}

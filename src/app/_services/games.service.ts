import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  gameList: Game[] = [
    {title: "Uther Party", 
    author: "guy",
    description: "classic warcraft 3 game",
    publishDate: {month: "January", day: 1, year: 2005},
    videoSrc: "../../assets/Action 7-3-2021 3-09-01 PM.mp4",
    imgSrc: "../../assets/WARCRAFT 3 - Copy.png" },
    {title: "Legion Tower Defense", 
    author: "guy",
    description: "classic warcraft 3 game",
    publishDate: {month: "January", day: 1, year: 2005},
    videoSrc: "../../assets/Action 7-3-2021 3-09-01 PM.mp4",
    imgSrc: "../../assets/WARCRAFT 3 - Copy.png" },
    {title: "Castle Fight", 
    author: "guy",
    description: "classic warcraft 3 game",
    publishDate: {month: "January", day: 1, year: 2005},
    videoSrc: "../../assets/Action 7-3-2021 3-09-01 PM.mp4",
    imgSrc: "../../assets/WARCRAFT 3 - Copy.png" },
    {title: "Dota All-stars", 
    author: "guy",
    description: "classic warcraft 3 game",
    publishDate: {month: "January", day: 1, year: 2005},
    videoSrc: "../../assets/Action 7-3-2021 3-09-01 PM.mp4",
    imgSrc: "../../assets/WARCRAFT 3 - Copy.png" },
  ];  


  constructor() { }

  getGames():Game[]{
    return this.gameList.slice();
  }

  addGame(game:Game){

  }

  removeGame(game:Game){

  }
  
  editGame(game:Game){

  }
}

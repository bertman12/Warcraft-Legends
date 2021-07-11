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
    imgSrc: "../../assets/Warcraft-III-generic-image-half-size.png" },
    {title: "Castle Fight", 
    author: "guy",
    description: "classic warcraft 3 game",
    publishDate: {month: "January", day: 1, year: 2005},
    videoSrc: "../../assets/Action 7-3-2021 3-09-01 PM.mp4",
    imgSrc: "../../assets/Warcraft-III-generic-image-half-size.png" },
    {title: "Legion Tower Defense", 
    author: "guy",
    description: "classic warcraft 3 game",
    publishDate: {month: "January", day: 1, year: 2005},
    videoSrc: "../../assets/Action 7-3-2021 3-09-01 PM.mp4",
    imgSrc: "../../assets/Warcraft-III-generic-image-half-size.png" },
    {title: "Dota All-stars", 
    author: "guy",
    description: 
    "A classic custom game mode that has been around even before warcraft 3 originating from a Starcraft custom game called Aeon of Strife\
    Dota All-Stars started as a custom game made and updated by several creators which eventually led to the popular MOBA genre\
    giving birth to new MOBA games like League of Legends, Heroes of the Storm, and Dota 2.",
    publishDate: {month: "January", day: 1, year: 2005},
    videoSrc: "../../assets/Action 7-3-2021 3-09-01 PM.mp4",
    imgSrc: "../../assets/Warcraft-III-generic-image-half-size.png" },
    {title: "Footman Frenzy", 
    author: "guy",
    description: "classic warcraft 3 game",
    publishDate: {month: "January", day: 1, year: 2005},
    videoSrc: "../../assets/Action 7-3-2021 3-09-01 PM.mp4",
    imgSrc: "../../assets/Warcraft-III-generic-image-half-size.png" },
    {title: "Warcraft Battle Royale", 
    author: "guy",
    description: "classic warcraft 3 game",
    publishDate: {month: "January", day: 1, year: 2005},
    videoSrc: "../../assets/Action 7-3-2021 3-09-01 PM.mp4",
    imgSrc: "../../assets/Warcraft-III-generic-image-half-size.png" },
    {title: "Island Defense", 
    author: "guy",
    description: "classic warcraft 3 game",
    publishDate: {month: "January", day: 1, year: 2005},
    videoSrc: "../../assets/Action 7-3-2021 3-09-01 PM.mp4",
    imgSrc: "../../assets/Warcraft-III-generic-image-half-size.png" },
    {title: "Island Troll Tribes", 
    author: "guy",
    description: "classic warcraft 3 game",
    publishDate: {month: "January", day: 1, year: 2005},
    videoSrc: "../../assets/Action 7-3-2021 3-09-01 PM.mp4",
    imgSrc: "../../assets/Warcraft-III-generic-image-half-size.png" },
    {title: "Sheep Tag", 
    author: "guy",
    description: "classic warcraft 3 game",
    publishDate: {month: "January", day: 1, year: 2005},
    videoSrc: "../../assets/Action 7-3-2021 3-09-01 PM.mp4",
    imgSrc: "../../assets/Warcraft-III-generic-image-half-size.png" },
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

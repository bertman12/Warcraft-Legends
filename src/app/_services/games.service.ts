import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  gameList: Game[] = [
    
    {
    id: 0,  
    title: "Uther Party", 
    author: "TheZizz",
    description: "Play a variety of randomly selected mini-games against your opponents.\
     A highly appraised warcraft classic, this custom game has been a benchmark for other\
     content creators when it comes to interesting gameplay content that rarely bores the used.",
    featureDescriptions: ['FeatureDesc1','FeatureDesc2','FeatureDesc3'],
    featureImages: [''],
    genre: 'Mini Games',
    version: '10.0',
    rating: '5',
    publishDate: {month: "September", day: 4, year: 2009},
    videoSrc: "../../assets/Action 7-3-2021 3-09-01 PM.mp4",
    imgSrc: "../../assets/Warcraft-III-generic-image-half-size.png" },
    {
    id: 1,
    title: "Castle Fight", 
    author: "Sunus",
    description: "You and your team must the correct composition of units to counter the enemy team's army.\
    You also have access to multiple races, each offering their own unique pros and cons. The goal is to \
    overwhelm the enemy team with your army before they do you.",
    featureDescriptions: [''],
    featureImages: [''],
    genre: 'Strategy',
    version: '2.0.40',
    rating: '5',
    publishDate: {month: "September", day: 27, year: 2020},
    videoSrc: "../../assets/Action 7-3-2021 3-09-01 PM.mp4",
    imgSrc: "../../assets/Warcraft-III-generic-image-half-size.png" },
    {
    id: 2,  
    title: "Legion Tower Defense", 
    author: "Lisk",
    description: "This game is a mix between a tower defense and a wave defense.\
    You control a builder that has to build non controllable units to defend your king.\
    Your resources are limited so you can strategize to save for more expensive units while\
    being weak for the current round and securing the next rounds, or if you fear losing\
    you can build cheaper units to get by. The game has gained so much popularity that it\
    was remade and sold on Steam as Legion Tower Defense 2.",
    featureDescriptions: [''],
    featureImages: [''],
    genre: 'Tower Defense/Wave Defense',
    version: '3.41',
    rating: '4',
    publishDate: {month: "January", day: 1, year: 2009},
    videoSrc: "../../assets/Action 7-3-2021 3-09-01 PM.mp4",
    imgSrc: "../../assets/Warcraft-III-generic-image-half-size.png" },
    {
    id: 3,  
    title: "Dota All-stars", 
    author: "Icefrog and others",
    description: 
    "A classic custom game mode that has been around even before warcraft 3 originating from a Starcraft custom game called Aeon of Strife\
    .Dota All-Stars started as a custom game made and updated by several creators which eventually led to the popular MOBA genre\
    giving birth to new MOBA games like League of Legends, Heroes of the Storm, and Dota 2.",
    featureDescriptions: [''],
    featureImages: [''],
    genre: 'MOBA',
    version: '6.88',
    rating: '5',
    publishDate: {month: "January", day: 1, year: 2005},
    videoSrc: "../../assets/Action 7-3-2021 3-09-01 PM.mp4",
    imgSrc: "../../assets/Warcraft-III-generic-image-half-size.png" },
    {
    id: 4,  
    title: "Footman Frenzy", 
    author: "miRaculix",
    description: "A brawl between 4 teams and their armies led by a unique hero of the player's choice\
    to sway the battle in their team's favour. The objective is to wipe out the enemy teams and be the last\
    team standing.",
    featureDescriptions: [''],
    featureImages: [''],
    genre: 'Brawl Arena',
    version: '5.7.2',
    rating: '5',
    publishDate: {month: "May", day: 24, year: 2021},
    videoSrc: "../../assets/Action 7-3-2021 3-09-01 PM.mp4",
    imgSrc: "../../assets/Warcraft-III-generic-image-half-size.png" },
    {
    id: 5,  
    title: "Warcraft Battle Royale", 
    author: "guy",
    description: "classic warcraft 3 game",
    featureDescriptions: [''],
    featureImages: [''],
    genre: 'MOBA',
    version: '6.88',
    rating: '5',
    publishDate: {month: "January", day: 1, year: 2005},
    videoSrc: "../../assets/Action 7-3-2021 3-09-01 PM.mp4",
    imgSrc: "../../assets/Warcraft-III-generic-image-half-size.png" },
    {
    id: 6,  
    title: "Island Defense", 
    author: "guy",
    description: "classic warcraft 3 game",
    featureDescriptions: [''],
    featureImages: [''],
    genre: 'MOBA',
    version: '6.88',
    rating: '5',
    publishDate: {month: "January", day: 1, year: 2005},
    videoSrc: "../../assets/Action 7-3-2021 3-09-01 PM.mp4",
    imgSrc: "../../assets/Warcraft-III-generic-image-half-size.png" },
    {
    id: 7,  
    title: "Island Troll Tribes", 
    author: "guy",
    description: "classic warcraft 3 game",
    featureDescriptions: [''],
    featureImages: [''],
    genre: 'MOBA',
    version: '6.88',
    rating: '5',
    publishDate: {month: "January", day: 1, year: 2005},
    videoSrc: "../../assets/Action 7-3-2021 3-09-01 PM.mp4",
    imgSrc: "../../assets/Warcraft-III-generic-image-half-size.png" },
    {
    id: 8,  
    title: "Sheep Tag", 
    author: "guy",
    description: "classic warcraft 3 game",
    featureDescriptions: [''],
    featureImages: [''],
    genre: 'MOBA',
    version: '6.88',
    rating: '5',
    publishDate: {month: "January", day: 1, year: 2005},
    videoSrc: "../../assets/Action 7-3-2021 3-09-01 PM.mp4",
    imgSrc: "../../assets/Warcraft-III-generic-image-half-size.png" },
  ];  


  constructor() { }

  getSelectedGame(id: number) {
    
    return this.gameList[id];

  }

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

import {  Component, Input, OnInit } from '@angular/core';
import { Game } from '../models/game.model';
import { GamesService } from '../_services/games.service';

@Component({
  selector: 'app-media-feature',
  templateUrl: './media-feature.component.html',
  styleUrls: ['./media-feature.component.css']
})
export class MediaFeatureComponent implements OnInit {

  constructor(private gameService: GamesService) {}
  @Input() game: Game = 
  {
  id: 0,  
  title: "Uther Party", 
  author: "guy",
  description: "classic warcraft 3 game",
  featureDescriptions: [''],
  featureImages: [''],
  genre: 'Mini Games',
  version: '10.0',
  rating: '5',
  publishDate: {month: "January", day: 1, year: 2005},
  videoSrc: "",
  imgSrc: "" }
  
  // configure these properties to control what is displayed in the media-feature component
  @Input() showTitle: boolean = true;
  @Input() showImage: boolean = false;
  //============================================================
  @Input() featureImg: string = '';
  gameTitle:string = "Game Name";
  
  getImgSrc(){
    if(!this.featureImg){
      return this.game.imgSrc;
    }
    else return this.featureImg;
  }
  ngOnInit(): void {}
}

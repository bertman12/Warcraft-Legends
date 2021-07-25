import {  Component, Input, OnInit } from '@angular/core';
import { Game } from '../_models/game.model';

@Component({
  selector: 'app-media-feature',
  templateUrl: './media-feature.component.html',
  styleUrls: ['./media-feature.component.css']
})
export class MediaFeatureComponent implements OnInit {

  constructor() {}
  @Input() game: Game = 
  {
  id: 0,  
  title: "Add A Game", 
  author: "guy",
  description: "NO GAME DATA SHOWED",
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

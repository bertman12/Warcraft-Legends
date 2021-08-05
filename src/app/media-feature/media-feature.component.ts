import {  Component, Input, OnInit } from '@angular/core';
import { Game } from '../_models/game.model';

@Component({
  selector: 'app-media-feature',
  templateUrl: './media-feature.component.html',
  styleUrls: ['./media-feature.component.css']
})
export class MediaFeatureComponent implements OnInit {

  constructor() {}
  @Input() game!: Game;
  
  // configure these properties to control what is displayed in the media-feature component
  @Input() showTitle: boolean = true;
  @Input() showImage: boolean = false;
  //============================================================
  @Input() featureImg: string = '';
  
  getImgSrc(){
    if(!this.featureImg){
      return this.game.imgSrc;
    }
    else{
      return this.featureImg;
    }
  }
  ngOnInit(): void {}
}

import {  Component, Input, OnInit } from '@angular/core';
import { Game } from '../_models/game.model';
import { ImagekitIoService } from '../_services/imagekit-io.service';

@Component({
  selector: 'app-media-feature',
  templateUrl: './media-feature.component.html',
  styleUrls: ['./media-feature.component.css']
})
export class MediaFeatureComponent implements OnInit {

  constructor(private imagekitService: ImagekitIoService) {}

  transformations = this.imagekitService.transformations; 
  // [{
  //   w: 300,
  //   h: 300
  // }]

  @Input() game!: Game;
  
  // configure these properties to control what is displayed in the media-feature component
  @Input() showTitle: boolean = true;
  @Input() showImage: boolean = false;
  // @Input() imagekitVideo: boolean = false;
  @Input() transformation: string = ''
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
  ngOnInit(): void {

  }
}

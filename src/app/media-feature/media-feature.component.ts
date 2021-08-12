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

  transformation!: any; 
  
  @Input() mediaTransformType: any ='';
  @Input() game!: Game;
  // configure these properties to control what is displayed in the media-feature component
  @Input() showTitle: boolean = true;
  @Input() showImage: boolean = false;
  // @Input() imagekitVideo: boolean = false;
  //============================================================
  @Input() featureImg: string = '';
  
  getImgSrc(){
    if(!this.featureImg){
      //this is the preview image shown in the games list
      return this.imagekitService.attachTransformQuery(this.game.imgSrc, 'previewImage');
    }
    else{
      return this.imagekitService.attachTransformQuery(this.featureImg, 'featureImage');
    }
  }

  ngOnInit(): void {
    this.transformation = this.imagekitService.getMediaTypeTransformation(this.mediaTransformType);
  }
}

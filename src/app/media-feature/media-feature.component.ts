import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-media-feature',
  templateUrl: './media-feature.component.html',
  styleUrls: ['./media-feature.component.css']
})
export class MediaFeatureComponent implements OnInit, AfterViewInit{

  constructor(private renderer: Renderer2) {}

  @ViewChild('localVideo') localVideo!: ElementRef<HTMLVideoElement>;
  videoWidth:number = 0;

  ngOnInit(): void {}

  ngAfterViewInit(){
    this.videoWidth = this.localVideo.nativeElement.scrollWidth;
  }

  onButtonClick(){
    console.log(this.localVideo);
  }

  getVideoWidth(){
    return this.videoWidth = this.localVideo.nativeElement.scrollWidth;
  }

}

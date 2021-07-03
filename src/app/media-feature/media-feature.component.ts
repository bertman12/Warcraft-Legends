import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-media-feature',
  templateUrl: './media-feature.component.html',
  styleUrls: ['./media-feature.component.css']
})
export class MediaFeatureComponent implements OnInit {

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

}

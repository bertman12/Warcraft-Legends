import {  Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-feature',
  templateUrl: './media-feature.component.html',
  styleUrls: ['./media-feature.component.css']
})
export class MediaFeatureComponent implements OnInit {

  constructor() {}
  gameTitle:string = "Game Name";
  ngOnInit(): void {}

}

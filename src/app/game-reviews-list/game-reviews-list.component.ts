import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-reviews-list',
  templateUrl: './game-reviews-list.component.html',
  styleUrls: ['./game-reviews-list.component.css']
})
export class GameReviewsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0,0);
  }
}

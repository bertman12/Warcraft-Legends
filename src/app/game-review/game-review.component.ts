import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../_services/games.service';

@Component({
  selector: 'app-game-review',
  templateUrl: './game-review.component.html',
  styleUrls: ['./game-review.component.css']
})

export class GameReviewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private gameService: GamesService){}

  game:any = {};
    
  ngOnInit(): void {
    this.gameService.getSelectedGame(this.route.snapshot.params['id']).subscribe((selectedGame)=>{
      this.game = selectedGame;
    });
  }
}


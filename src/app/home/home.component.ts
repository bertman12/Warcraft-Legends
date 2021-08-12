import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Subscription } from 'rxjs';
import { Game } from '../_models/game.model';
import { GamesService } from '../_services/games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private gameService: GamesService,
              private router: ActivatedRoute){}

  sub!: Subscription;

  localGameArr: Game[] = [];
  ngOnInit(): void {
    window.scrollTo(0,0);
    this.gameService.getGames();
    this.gameService.gameListModified.subscribe((games)=> {
      this.localGameArr = games;
    });
    this.sub = this.router.fragment.subscribe(
      (fragment) => {
        if(fragment === 'featured'){
          window.scrollTo(900, 900);
        }
      }
    );
    // this.gameService.getGames().then((games)=> {this.localGameArr = games;});
  }

  staggerMedia(index: number):string {
    if(index % 2 ===0){
      return "feature-container-right"
    }
    else{
      return "feature-container-left"
    }
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
    console.log('home component destroyed');
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesService } from '../_services/games.service';

@Component({
  selector: 'app-nav',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,
              private gameService: GamesService) { }

  ngOnInit(): void {
  }

  onSignIn(){
    this.router.navigate(['login']),{relativeTo: this.router};
  }

  printHTTP(){
    this.gameService.printer();
  }
}

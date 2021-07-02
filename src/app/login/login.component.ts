import { Component, OnInit, NgModule } from '@angular/core'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userUsername = '';
  userPassword = '';


  constructor(private router: Router) { }

  ngOnInit(): void {}

  authErorr(){
    console.log('Missing password'); 
  }

  onLogin(){
    this.playAudio();
    this.router.navigate(['']),{relativeTo: this.router};
  }

  onSignUp(){
    this.router.navigate(['register']),{relativeTo: this.router}; 
  }
 
  playAudio(){
    console.log('playing audio');
    let audio = new Audio();
    audio.src = '../../assets/TheHornOfCenarius.mp3' ;
    audio.load();
    audio.play();
  } 
}



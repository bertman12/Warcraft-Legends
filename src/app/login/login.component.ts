import { Component, OnInit, NgModule } from '@angular/core'; 
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { User } from '../_models/userInterface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userEmail: string = '';
  userPassword: string = '';
  responce: string = '';

  displayError: boolean = false; 

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void { }

  authErorr(){
    console.log('Missing password'); 
  }

  async onLogin(){

    this.clearAlert();  
    await this.auth.login({email: this.userEmail, password: this.userPassword});
    this.ongetUser(this.userEmail);
    if ( !this.auth.authFlag ){
        this.playAudio();
        this.router.navigate(['']),{relativeTo: this.router};  
      }
    else if ( this.auth.authFlag ){
      console.log("error email or password not found")
      this.displayError = true; 
    }
  }

  async ongetUser(email: string){
    await this.auth.getUser(email).then( res => {
      console.log(res);
    })
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

  clearAlert(){
    this.displayError = false; 
  }
}



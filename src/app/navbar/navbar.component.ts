import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { User } from '../_models/userInterface';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUser !: User ; 
  userExist: boolean = false; 

  constructor(private router: Router, private userService: UserService, private auth: AuthService) { }

  ngOnInit(): void { 
    // this.userService.userLoggedIn.subscribe( 
    //   loggedInUser => {
    //     this.userExist = true; 
    //     this.currentUser = loggedInUser; 
    //   }
    // )
  }

  onSignIn(){
    this.router.navigate(['login']),{relativeTo: this.router};
  }

  onLogOut(){
    this.currentUser = {};
    this.userExist = false; 
    console.log(this.currentUser);
    this.auth.logout(); 
  }
    

}

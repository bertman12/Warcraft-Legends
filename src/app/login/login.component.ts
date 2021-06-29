import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authError : boolean = false; 


  constructor() { }

  ngOnInit(): void {}

  authErorr(){
    console.log('Missing password'); 
    this.authError = true; 
  }

}



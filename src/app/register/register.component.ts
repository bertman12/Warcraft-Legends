import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { User } from '../_models/userInterface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user: User = {};

  constructor(private router: Router, private auth: AuthService) { }
 
  ngOnInit(): void {
  }

  async onRegister(username: HTMLInputElement, password: HTMLInputElement, name: HTMLInputElement,
    email: HTMLInputElement, age: HTMLInputElement, location: HTMLInputElement,){

    // set properties to numbers/intergers
    const ageInput = parseInt(age.value,10);
    const locationInput = parseInt(location.value,10);
    const registerData: User= {
      username: username.value, 
      password: password.value, 
      name: name.value, 
      email: email.value, 
      age: ageInput, 
      location: locationInput 
    };
    // pass object user to service to handle request
    await this.auth.register(registerData);

    this.router.navigate(['']),{relativeTo: this.router};

  }

  onBack(){
    this.router.navigate(['login']),{relativeTo: this.router};
  }

}

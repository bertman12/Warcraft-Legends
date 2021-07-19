import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { API_URL } from 'src/environments/environment';
@Component({
  selector: 'app-nav',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSignIn(){
    this.router.navigate(['login']),{relativeTo: this.router};
  }
  print(){
    console.log(`${API_URL}`);
  }

}

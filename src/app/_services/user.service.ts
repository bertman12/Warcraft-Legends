import { Injectable } from '@angular/core';
import { User } from '../_models/userInterface';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../environments/environment'; 
import { AuthService } from '../_services/auth.service';
import { Output, EventEmitter } from '@angular/core';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // @Output() userLoggedIn  = new EventEmitter<User>();

  // made the user into an observable so multiple users can subcribe to it
  public currentUser !: Observable<User>; 

  constructor( private http: HttpClient, private auth : AuthService) { }

  userjwt: string = this.auth.jwtKey; 

  // getUser(body: {email: string}): Promise<any>{
  //   const jwt = localStorage.getItem(this.userjwt);
  //   const httpOptions = {
  //     headers: {Authorization: `Bearer ${jwt}`}
  //   }; 

  //   return this.http.post(`${API_URL}/user`, body, httpOptions)
  //   .toPromise()
  //   .then( res => {
  //     this.userLoggedIn.emit(res); 
  //   }); 
  // }

  getUser(body: {email: string}): Observable<any>{
    const jwt = localStorage.getItem(this.userjwt);
    const httpOptions = {
      headers: {Authorization: `Bearer ${jwt}`}
    }; 

    return this.http.post(`${API_URL}/user`, body, httpOptions)
    .pipe(map( res => {
      console.log(res); 
    })); 
  }

}

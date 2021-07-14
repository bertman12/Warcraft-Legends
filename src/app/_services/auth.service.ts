import { Injectable } from '@angular/core';
import { User } from '../_models/userInterface';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtKey: string = 'no_jwt';
  authFlag: boolean = false;

  constructor( private http: HttpClient) { }

  public user: User = {};

  async register(body: User){
     await this.http.post(`${API_URL}/register`,body).toPromise().then(( res ) =>
      {
        console.log('JWT KEY:', res);
        localStorage.setItem(this.jwtKey, <string>res);
      })
  }

  async login(body: { email:string; password:string; }){
    await this.http.post(`${API_URL}/login`,body).toPromise().then((res) => 
      {
        localStorage.setItem(this.jwtKey, <string>res)
        this.userAuthorized(<string>res); 
      })
  }

  logout(){
    localStorage.removeItem(this.jwtKey);
    console.log(this.jwtKey);
  }

  userAuthorized(res: string){
    if( res == 'Email Not Found' || res == 'Password Not Found' ){
      this.authFlag = true; 
    }
    else{
      this.authFlag = false; 
    }
  }

}

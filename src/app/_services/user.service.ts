import { Injectable } from '@angular/core';
import { User } from '../_models/userInterface';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../environments/environment'; 
import { AuthService } from '../_services/auth.service';
import { BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userjwt: string = this.auth.jwtKey;   

  // Using a Behavioral Subject as users will change or will change 
  // to null when user logs out(emit new value)
  // Then we use an observalbe so other components can subcribe to the 
  // users info 
  private currentUserSubject: BehaviorSubject<any>; 
  public currentUser !: Observable<User>; 

  constructor( private http: HttpClient, private auth : AuthService) {
    this.currentUserSubject = new BehaviorSubject<any>(
      // string -> JS object 
      JSON.parse(localStorage.getItem('currentUser')!)
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // fucntion to fetch users info from any component
  public get currentUserValue(){
    return this.currentUserSubject.value; 
  }

  // fetches the current user through a request sending jwt key to have auth. stores the 
  // user in local storage 
  getUser(body: {email: string}): Promise<any>{
    const jwt = localStorage.getItem(this.userjwt);
    const httpOptions = {
      headers: {Authorization: `Bearer ${jwt}`}
    }; 

    return this.http.post(`${API_URL}/user`, body, httpOptions)
    .toPromise()
    .then( res => {
      let userReturned: User = <User>res ; 
      // general syntax for storing data. If we have an object we need to stringify the value
      localStorage.setItem('currentUser', JSON.stringify(userReturned));
      this.currentUserSubject.next(userReturned);
    }); 
  }

  logout(){
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    setTimeout(()=>{
      window.location.reload();
    }, 100);
  }

}

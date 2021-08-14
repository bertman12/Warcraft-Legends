import { Injectable } from '@angular/core';
import { API_URL } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private userjwt: string = this.auth.jwtKey;

  constructor( private http: HttpClient, private auth: AuthService) { }

  getComments(id: number): Promise<any>{
    return this.http.get(`${API_URL}/comments/${id}`).toPromise(); 
  }

  addComment(body:{}): Promise<any>{
    const jwt = localStorage.getItem(this.userjwt);
    // put space in betweeen bearer and jwt 
    const httpOptions = {
      headers: { Authorization: `Bearer ${jwt}`}
    };
    return this.http.post(`${API_URL}/comment`,body , httpOptions).toPromise(); 
  }

  editComment(body:{}, id: number): Promise<any>{
    const jwt = localStorage.getItem(this.userjwt);
    const httpOptions = { headers: { Authorization: `Bearer ${jwt}`}};

    return this.http.post(`${API_URL}/comment/${id}`,body , httpOptions).toPromise();
  }

  deleteComment( id: number): Promise<any>{
    const jwt = localStorage.getItem(this.userjwt);
    return this.http.delete(`${API_URL}/comment/${id}`, {headers:{ Authorization: `Bearer ${jwt}`}}).toPromise(); 
  }

  editLikes(id:number, body:{}): Promise<any> {
    const jwt = localStorage.getItem(this.userjwt);
    const httpOptions = { headers: { Authorization: `Bearer ${jwt}`}};

    return this.http.post(`${API_URL}/likes/${id}`,body , httpOptions).toPromise();
  }

}

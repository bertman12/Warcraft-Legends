import { Injectable } from '@angular/core';
import { API_URL } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../_models/commentInterface';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  jwtKey: string = 'user_jwt';

  constructor( private http: HttpClient) { }

  getComments(id: number): Promise<any>{
    const jwt = localStorage.getItem(this.jwtKey);
    return this.http.get(`${API_URL}/comments/${id}`, { headers:{ Authorization: `Bearer${jwt}`}}).toPromise(); 
  }

  addComment(body: {comment: Comment}): Promise<any>{
    const jwt = localStorage.getItem(this.jwtKey);
    const httpOptions = {
      headers: { Authorization: `Bearer${jwt}`}
    };

    return this.http.post(`${API_URL}/comments`,body , httpOptions).toPromise(); 
  }

  deleteComment( id: number): Promise<any>{
    const jwt = localStorage.getItem(this.jwtKey);
    return this.http.delete(`${API_URL}/comments/${id}`, {headers:{ Authorization: `Bearer${jwt}`}}).toPromise(); 
  }

}

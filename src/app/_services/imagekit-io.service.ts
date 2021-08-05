import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class ImagekitIoService {

  constructor(private http: HttpClient) { }
  
  //on successful upload handle the 200 response and store the image path in the database

  //make request for authorization endpoint to backend for a signature to use for client side uploading
  

// Upload function internally uses the ImageKit.io javascript SDK

  //after user uploads image ??make a request to get the url of the image?? or get the url from the response after making the upload request


}

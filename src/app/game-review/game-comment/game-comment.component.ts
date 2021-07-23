import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { User } from '../../_models/userInterface';
import { FormGroup, FormControl, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-game-comment',
  templateUrl: './game-comment.component.html',
  styleUrls: ['./game-comment.component.css']
})
export class GameCommentComponent implements OnInit {

  currentUser : User = {} ; 
  commentForm !: FormGroup; 

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.userService.currentUser.subscribe((user: User) =>
      {
        this.currentUser = user; 
      });

    //********** creating form  ***********/
    this.commentForm = new FormGroup({
      // controls
      'username': new FormControl(null, Validators.required),
      'subject': new FormControl(null, Validators.required),
      'comment': new FormControl(null, Validators.required)
    });



  }

  onSubmit(){
    console.log(this.commentForm);
    this.commentForm.reset(); 
  }

  onAddComment(){

    if(this.currentUser){
      this.commentForm.patchValue({'username' : this.currentUser.username });
    }
    
  }


}

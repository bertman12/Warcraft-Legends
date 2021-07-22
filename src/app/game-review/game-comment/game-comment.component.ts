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

  currentUser !: User ; 
  userSignedIn : boolean = false; 

  commentForm !: FormGroup; 

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    //********** creating form  ***********/
    this.commentForm = new FormGroup({
      // controls
      'username': new FormControl(null, Validators.required),
      'subject': new FormControl(null, Validators.required),
      'comment': new FormControl(null, Validators.required)
    });

    // this.userService.userLoggedIn.subscribe( 
    //   loggedInUser => {
    //     this.userSignedIn = true; 
    //     console.log(loggedInUser);
    //     this.currentUser = loggedInUser; 
    // })

  }

  onSubmit(){
    console.log(this.commentForm);
    this.commentForm.reset(); 
  }

  onAddComment(){
    // @ts-ignore: Object is possibly 'null'.
    console.log(this.userSignedIn); 
  }

}

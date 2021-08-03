import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { User } from '../../_models/userInterface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommentService } from 'src/app/_services/comment.service';
import { Comment } from '../../_models/commentInterface';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-game-comment',
  templateUrl: './game-comment.component.html',
  styleUrls: ['./game-comment.component.css']
})
export class GameCommentComponent implements OnInit {

  gameId ?: number; 
  currentUser : User = {} ; 
  commentForm !: FormGroup; 
  newComment !: Comment; 
  comments: Comment[] = []; 
  editCommentId ?: number; 

  constructor(private userService: UserService, private commServ: CommentService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.currentUser.subscribe((user: User) =>
      {
        this.currentUser = user; 
      });

    this.gameId = this.route.snapshot.params['id'];

    //********** creating form  ***********/
    this.commentForm = new FormGroup({
      // controls
      'username': new FormControl(null, Validators.required),
      'subject': new FormControl(null, Validators.required),
      'comment': new FormControl(null, Validators.required)
    });

    //******* when a game is picked show the comments already in the database ***/
    this.onGetComments(); 
  }

  // submitting new comment and 
  async onSubmit(){
    // hard coded likes to 0 since its a new commnet 
    // structuring new comment 
    let newComment = { 
      userID: this.currentUser.id , 
      like: 0 , 
      commentText: this.commentForm.value.comment ,
      gameID: this.gameId,
      username:this.commentForm.value.username,
      subject:this.commentForm.value.subject
    }
    // sending new comment to service to post 
    await this.commServ.addComment(newComment);
    this.onGetComments(); 

    // resetting form and getting username 
    this.commentForm.reset(); 
    if(this.currentUser){
      this.commentForm.patchValue({'username' : this.currentUser.username });
    }

  }

  // when user click on edit button pops up modal and get id of comment and user
  onEditComment(id: number){
    if(this.currentUser){
      this.commentForm.patchValue({'username' : this.currentUser.username });
      // search through the array for the content 
      for( let i =0; i < this.comments.length ; i++){
        if( this.comments[i].commentID == id ){
          this.commentForm.patchValue({'subject': this.comments[i].subject});
          this.commentForm.patchValue({'comment': this.comments[i].commentText});
        }
      }
    }
    this.editCommentId = id; 
  }

  // when user submits the edit we send info editted and the comment id 
  async onEdit(){
    let editComment = {
      commentText: this.commentForm.value.comment,
      subject: this.commentForm.value.subject 
    }

   await this.commServ.editComment( editComment, this.editCommentId! );
    this.onGetComments();
    this.editCommentId != null; 

    // resetting form and getting username 
    this.commentForm.reset(); 
    if(this.currentUser){
      this.commentForm.patchValue({'username' : this.currentUser.username });
    }
  }


  // when user click on add comment button initializes the username input if user exists  
  onAddComment(){
    if(this.currentUser){
      this.commentForm.patchValue({'username' : this.currentUser.username });
    }
  }

  // when function called all comments (w/ corresponding game id )are fetched
  async onGetComments(){
    //Type 'number| undefined' is not assignable to type 'number' solution 
     await this.commServ.getComments(this.gameId!).then((res) => 
     {
        this.comments = res;
     }); 
  }

  // deleting comments depending on comments id 
  async onDeleteComments(id: number){
   await this.commServ.deleteComment(id);
   this.onGetComments(); 
  }

  // updating likes to plus 1 (maybe keep track of who has liked the comments)
  async onLike( id: number){
    let count = 0; 

    for( let i =0; i < this.comments.length; i++){
      if( this.comments[i].commentID === id ){
        count = this.comments[i].likes! + 1 ; 
      }
    }
    await this.commServ.editLikes(id, {'likes': count});
    this.onGetComments(); 
  }


}

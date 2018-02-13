import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CommentService } from './../../comment.service';
import { Router } from '@angular/router';
import { UserService } from './../../user.service';
import { Comment } from './../../comment';
import { User } from './../../user';
import { Message } from './../../message';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {

   currentUser: User = new User();
   newComment: Comment = new Comment();
   errors: string[] = [];
   @Output() createCommentEvent = new EventEmitter();
   @Input() message: any;

   constructor(
      private _commentService: CommentService,
      private _router: Router,
      private _userService: UserService
   ) { }

   ngOnInit() {
      this._userService.session((res) => {
         if (res.status === false) {
            this._router.navigateByUrl('/');
         } else {
            this.currentUser = res;
            console.log(this.currentUser)
         }
      });
   }

   createComment() {
      this.errors = []
      // here
      this.newComment.user=this.currentUser._id;
      this.newComment.message=this.message._id;
      this._commentService.create(
         this.newComment,
         comment => {
            if(comment.errors) {
               for (const key of Object.keys(comment.errors)) {
                  const error = comment.errors[key];
                  this.errors.push(error.message);
               }
            } else {
               this.newComment = new Comment()
               this.createCommentEvent.emit();
               
            }
         }
      );
   }

}

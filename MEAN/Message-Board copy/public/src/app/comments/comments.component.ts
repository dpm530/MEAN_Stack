import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommentService } from '../comment.service';
import { Comment } from '../comment';
import { Message } from '../message';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

   @Output() createCommentEvent = new EventEmitter();
   @Input() message: Message;
   comments: Comment[] = [];

   constructor(private _commentService: CommentService) { }

   ngOnInit() {
      console.log('msg: ', this.message);
      this.getComments()
   }

   getComments(){
      this._commentService.index(comments => this.comments = comments )
   }

   createComment() {
      this.createCommentEvent.emit();
   }
}

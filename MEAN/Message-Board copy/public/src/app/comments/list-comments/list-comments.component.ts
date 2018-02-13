import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from './../../comment.service';
import { Comment } from './../../comment';

@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.css']
})
export class ListCommentsComponent implements OnInit {
   // message: any = {};
   @Input() message = { comments: [] };
   // comments: Comment[];

   constructor(private _commentService: CommentService) { }

   ngOnInit() {
      // this.list()
   }

   getComments() {
      console.log('testing');
   }

   // list(){
   //    this._commentService.listComments(this.message._id ,comments => this.comments = comments)
   // }

}

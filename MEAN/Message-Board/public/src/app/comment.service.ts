import { Injectable } from '@angular/core';
import { Comment } from './comment';
import { Http } from '@angular/http';

@Injectable()
export class CommentService {

   constructor(private _http: Http) { }

   index(callback) {
      this._http.get('/comments').subscribe(
         res => callback(res.json()),
         err => console.log(err)
      );
   }

   create(newComment: Comment, callback) {
      this._http.post(`/comments/${newComment.message}`, newComment).subscribe(
         res => callback(res.json()),
         err => console.log(err)
      );
   }

   listComments(_id,callback) {
      this._http.get(`/listComments/${_id}`).subscribe(
         res => callback(res.json()),
         err => console.log(err)
      );
   }



}

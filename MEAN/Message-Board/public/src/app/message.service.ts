import { Injectable } from '@angular/core';
import { Message } from './message';
import { Http } from '@angular/http';

@Injectable()
export class MessageService {

   constructor(private _http: Http) { }

   index(callback) {
      this._http.get('/messages').subscribe(
         res => callback(res.json()),
         err => console.log(err)
      );
   }

   create(newMessage: Message, callback) {
      this._http.post('/messages', newMessage).subscribe(
         res => callback(res.json()),
         err => console.log(err)
      );
   }

}

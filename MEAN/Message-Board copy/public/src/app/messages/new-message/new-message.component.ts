import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MessageService } from './../../message.service'
import { Message } from './../../message';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {

   newMessage: Message = new Message();
   errors: string[] = [];
   @Output() createMessageEvent = new EventEmitter();

   constructor(private _messageService: MessageService) { }

   ngOnInit() {
   }

   createMessage() {
      this.errors = []
      this._messageService.create(
         this.newMessage,
         message => {
            if(message.errors) {
               for (const key of Object.keys(message.errors)) {
                  const error = message.errors[key];
                  this.errors.push(error.message);
               }
            } else {
               this.newMessage = new Message()
               this.createMessageEvent.emit();
            }
         }
      );
   }

}

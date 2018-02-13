import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MessageService } from './../../message.service';
import { Message } from './../../message';

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrls: ['./list-messages.component.css']
})
export class ListMessagesComponent implements OnInit {

   @Input() messages: Message[];
   @Output() createCommentEvent = new EventEmitter();

   constructor(private _messageService: MessageService) { }

   ngOnInit() {
   }

   createComment() {
      this.createCommentEvent.emit();
   }

}

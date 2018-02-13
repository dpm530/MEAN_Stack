import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Message } from '../message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

   messages: Message[] = [];

   constructor(private _messageService: MessageService) { }

   ngOnInit() {
      this.getMessages()
   }

   getMessages() {
      //use service to get message and store in array
      this._messageService.index(messages => this.messages = messages)

   }
   // create a function that gets all the messages and store in an array
   // execute that function when createMessageEvent happens
   // pass the array of messages to the list-messages componenet via Input
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { UserService } from './user.service';
import { MessageService } from './message.service';
import { CommentService } from './comment.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommentsComponent } from './comments/comments.component';
import { NewCommentComponent } from './comments/new-comment/new-comment.component';
import { ListCommentsComponent } from './comments/list-comments/list-comments.component';
import { MessagesComponent } from './messages/messages.component';
import { NewMessageComponent } from './messages/new-message/new-message.component';
import { ListMessagesComponent } from './messages/list-messages/list-messages.component';

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      DashboardComponent,
      CommentsComponent,
      NewCommentComponent,
      ListCommentsComponent,
      MessagesComponent,
      NewMessageComponent,
      ListMessagesComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpModule
   ],
      providers: [
         UserService,
         MessageService,
         CommentService
      ],
      bootstrap: [AppComponent]
})
export class AppModule { }

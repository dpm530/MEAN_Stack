import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { Comment } from '../comment';
import { Message } from '../message';

@Component({
   selector: 'app-dashboard',
   templateUrl: './dashboard.component.html',
   styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

   currentUser: User = new User();
   users: any[];


   constructor(
      private _userService: UserService,
      private _router: Router
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

      this.getUsers();


   }

   getUsers() {
      console.log('get users function')
      this._userService.index(users => this.users = users)
   }

   logout(){
      this._userService.logout(data => this._router.navigateByUrl('/'))
   }




}

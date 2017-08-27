import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service' 
import { User } from './types/user';
import { Observable } from "rxjs";

@Component({
  selector: 'app-root',
  template: `
    <h1>My User List</h1>  
    <user-list [users]=users></user-list>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  users: Observable<User[]>;

  constructor(private UserService: UserService) {
    
  }

  //  When the program starts up, let's fake some users.
  ngOnInit() {

    /*
      WE CAN FAKE SOME DATA HERE BY PASSING A FLAG, USEFUL IF YOU DON'T WANT TO USE A SERVICE
    */
    this.UserService.initialiseUsers();
    this.users = this.UserService.getUsers();    
  }
  
}

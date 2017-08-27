import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service' 
import { User } from './../../types/user';
import {Observable} from "rxjs";

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {

  users: Observable<User[]>;

  constructor(private UserService: UserService) { }

  ngOnInit() {
    this.UserService.initialiseUsers(10)
    this.users = this.UserService.getUsers();    
    console.log(this.users)
  }

}

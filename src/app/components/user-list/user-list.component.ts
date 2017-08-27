import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service' 
import { User } from './../../types/user';
import {Observable} from "rxjs";

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {

  users: Array<User> = [];

  constructor(private UserService: UserService) { }

  ngOnInit() {

    this.users = this.UserService.createRandomUsers(100);
    

  }

}

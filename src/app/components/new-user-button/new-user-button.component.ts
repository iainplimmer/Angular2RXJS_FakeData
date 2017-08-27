import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service' 
import { User } from './../../types/user';
import { Observable } from "rxjs";

@Component({
  selector: 'new-user-button',
  template: `
    <button (click)=createRandomUser()>Create Random User</button>
  `
})
export class NewUserComponent implements OnInit {

  constructor(private UserService: UserService) { }

  ngOnInit() {
  }

  createRandomUser() {
    let user = this.UserService.createRandomUser();
    this.UserService.addUser(user);
  }

}

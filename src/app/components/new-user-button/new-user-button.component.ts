import { Component } from '@angular/core';
import { UserService } from './../../services/user.service' 
import { User } from './../../types/user';

@Component({
  selector: 'new-user-button',
  template: `
    <button (click)=createRandomUser()>Create Random User</button>
  `
})
export class NewUserComponent {

  constructor(private UserService: UserService) { }

  createRandomUser() {
    let user = this.UserService.createRandomUser();
    this.UserService.addUser(user);
  }

}

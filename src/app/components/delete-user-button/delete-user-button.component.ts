import { Component, Input } from '@angular/core';
import { UserService } from './../../services/user.service' 
import { User } from './../../types/user';

@Component({
  selector: 'delete-user-button',
  template: `
  <button (click)=deleteUser()>Delete</button>
`
})
export class DeleteUserButtonComponent {

  @Input()
  user: User;

  constructor(private UserService: UserService) { }

  deleteUser() {
    this.UserService.removeUser(this.user);
  }

}

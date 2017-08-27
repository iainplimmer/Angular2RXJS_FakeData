import { Component } from '@angular/core';
import { UserService } from './services/user.service' 
import { User } from './types/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  user: User;

  constructor(private UserService: UserService) {
    
    this.user = UserService.createRandomUser();

    var users = UserService.createRandomUsers(100000)
    console.log(users)

  }
}

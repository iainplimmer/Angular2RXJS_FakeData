import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { User } from './../types/User';
import {BehaviorSubject} from "rxjs/BehaviorSubject"

@Injectable()
export class UserService {

  private users$ = new BehaviorSubject<User[]>([]);

  getUsers() {
    return this.users$.asObservable();
  }

  addUser(user) {
      let users = [user, ...this.users$.getValue()];
      this.users$.next(users);
  }

  removeUser(user) {
      let users = this.users$.getValue().filter(u => u !== user);
      this.users$.next(users);
  }

  //  Creates as many users as you tell it to.
  initialiseUsers(numberOfUsers: number) {

    let index: number = 0;
    let createdUsers: Array<User> = [];

    do {
      createdUsers.push(this.createRandomUser());
      index++;
    }
    while (index < numberOfUsers)

    let users = [...createdUsers, ...this.users$.getValue()];
    this.users$.next(users);          
  }

  //  Method used to create a random new user
  createRandomUser(): User {    
    return new User(
      faker.random.number().toString(),
      faker.name.firstName(),
      faker.name.lastName(),
      faker.internet.email(),
      faker.internet.avatar()
    )

    

  }

}

import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { User } from './../types/User';
import {BehaviorSubject} from 'rxjs/BehaviorSubject'
import { Http, RequestOptions, Response, Headers } from '@angular/http'
import { Constants } from './../app.constants';

@Injectable()
export class UserService {

  constructor(private Http: Http) {

  }

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
  initialiseUsers(numberOfUsers: number, fromService: boolean = false) {

    if (fromService) {
      //  If the user has requested that the data comes from the service, get it from Node,      
      this.Http.get(Constants.GetUsers).toPromise().then(res => {
        let users = [...res.json(), ...this.users$.getValue()];
        this.users$.next(users);       
      })
    }
    else {
      //  Let's fake our own data here without a service if the flag has not been passed 
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

import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { User } from './../types/User';

@Injectable()
export class UserService {

  constructor() { }

  //  Creates as many users as you tell it to.
  createRandomUsers(numberOfUsers: number): Array<User> {
    
    let index: number = 0;
    let createdUsers: Array<User> = [];

    do {
      createdUsers.push(this.createRandomUser());
      index++;
    }
    while (index < numberOfUsers)

    return createdUsers;
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

import { Component, OnInit, Input } from '@angular/core';
import { User } from './../../types/user';
import { Observable } from "rxjs";

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {

  @Input()
  users: Observable<User[]>;

  constructor() { }

  ngOnInit() {

  }

}

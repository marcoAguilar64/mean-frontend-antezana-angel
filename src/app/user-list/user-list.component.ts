import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'sky-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  usertest: User = {
    name: "Luis",
    lastname: "Perez",
    username: "lucho123",
    email: "lucho@gmail.com",
    avatar: "testavatartt"
  };
  constructor() { }

  ngOnInit() {
  }

}

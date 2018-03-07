import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'sky-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: User[] = [];

  constructor() {

    this.userList.push({
      name: "Luis",
      lastname: "Perez",
      username: "lucho123",
      email: "lucho@gmail.com",
      avatar: "avatarluis"
    });

    this.userList.push({
      name: "Juan",
      lastname: "Gomez",
      username: "juan123",
      email: "juan@gmail.com",
      avatar: "avatarjuan"
    });    
  }

  ngOnInit() {
  }

}

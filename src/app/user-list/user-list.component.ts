import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'sky-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  /* usertest: User = {
    name: "Luis",
    lastname: "Perez",
    username: "lucho123",
    email: "lucho@gmail.com",
    avatar: "testavatartt"
  }; */
  userlist: User[] = [];
  constructor() {
    this.userlist.push({
      name: "Angel",
      lastname: "Antezana",
      username: "angel123",
      email: "angel@gmail.com",
      avatar: "angelavatar"
    });
    this.userlist.push({
      name: "Laura",
      lastname: "Chambi",
      username: "laura123",
      email: "laura@gmail.com",
      avatar: "lauraavatar"
    });
  }

  ngOnInit() {
  }

}

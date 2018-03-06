import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'sky-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userlist: User[] = [];
  myUserService: UserService;

  /* usertest: User = {
    name: "Luis",
    lastname: "Perez",
    username: "lucho123",
    email: "lucho@gmail.com",
    avatar: "testavatartt"
  }; */

  constructor(userService: UserService) {
    this.myUserService = userService;
  }

  ngOnInit() {
    this.userlist = this.myUserService.getUserList();
  }

}

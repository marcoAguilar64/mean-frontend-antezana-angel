import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/user';

@Injectable()
export class UserService {

  myHttpClient: HttpClient;

  constructor(httpclient: HttpClient) {
    this.myHttpClient = httpclient;
  }

  getUserList(): User[] {
    let userList: User[] = [];
    userList.push({
      name: "Luis",
      lastname: "Perez",
      username: "lucho123",
      email: "lucho@gmail.com",
      avatar: "avatarluis"
    });
    userList.push({
      name: "Luis",
      lastname: "Perez",
      username: "lucho123",
      email: "lucho@gmail.com",
      avatar: "avatarluis"
    });
    return userList;
  }

}

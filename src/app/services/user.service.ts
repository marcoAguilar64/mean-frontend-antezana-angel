import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/user';

@Injectable()
export class UserService {
  userlist: User[] = [];
  
  private myHttpClient: HttpClient;  
  constructor(httpClient: HttpClient) {
    this.myHttpClient = httpClient;
  }

  /**
   * getUserList
   */
  public getUserList(): User[] {
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
    return this.userlist;
  }
}

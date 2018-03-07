import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/user';

const userApiUrl = 'http://localhost:3000/users'

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
  public getUserList(): Observable<any> {
    return this.myHttpClient.get(userApiUrl);
  }
}

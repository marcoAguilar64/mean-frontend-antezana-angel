import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/user';

@Injectable()
export class UserService {
  myHttpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.myHttpClient = httpClient;
  }

}

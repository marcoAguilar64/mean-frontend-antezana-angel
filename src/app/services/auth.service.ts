import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const userApiUrl = 'http://localhost:3000/auth';

@Injectable()
export class AuthService {

  constructor(private httpclient: HttpClient) { }

  login(credenciales): Observable<any> {
    return this.httpclient.post(`${userApiUrl}/login`, credenciales);
  }

  getMyPersonalInformation(): Observable<any> {
    return this.httpclient.get(`${userApiUrl}/me`);
  }
}

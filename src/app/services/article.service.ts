import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const articleApiUrl = 'http://localhost:3000/articles';

@Injectable()
export class ArticleService {

  myHttpClient: HttpClient;
  constructor(httpclient: HttpClient) {
    this.myHttpClient = httpclient;
  }

  getArticleList(): Observable<any> {
    return this.myHttpClient.get(articleApiUrl);
  }

  getArticleById(articleid: string): Observable<any> {
    return this.myHttpClient.get(`${articleApiUrl}/${articleid}`);
  }

}

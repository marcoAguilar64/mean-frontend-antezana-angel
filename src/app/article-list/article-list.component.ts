import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';
import { ArticleService } from '../services/article.service';
import { Router } from '@angular/router';


@Component({
  selector: 'sky-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articleList: Article[] = [];
  constructor(private articleservice: ArticleService,
    private router: Router) { }

  ngOnInit() {
    this.articleservice.getArticleList()
    .subscribe(
      (response) => {
        //console.log('respuesta del servidor: ', response);
        this.articleList = response.data;
      }, (error) => {
        console.log('Error: ', error);
      }
    );
}

viewArticle(articleId): void {
  console.log('id del article: ', articleId);
this.router.navigate(['article',articleId,'view']);
}

}

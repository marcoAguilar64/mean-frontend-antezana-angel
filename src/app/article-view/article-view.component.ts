import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../model/article';

@Component({
  selector: 'sky-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {
  articleid: string;
  articleViewed: Article = {
    title: '',
    content:''
  };

  constructor(
    private activateroute: ActivatedRoute,
    private articleservice: ArticleService
  ) { }

  ngOnInit() {
    this.activateroute.params
      .subscribe(
        (paramss) => {
          this.articleid = paramss.id;
          this.articleservice.getArticleById(this.articleid)
            .subscribe(
              (response) => {
                console.log('respuesta del servidor: ', response);
                this.articleViewed = response.data;
              }, (error) => {
                console.log('Error del servidor', error);
              }
            );
        }
      );
  }

}

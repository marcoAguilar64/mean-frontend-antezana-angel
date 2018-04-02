import { Component, OnInit } from "@angular/core";
import { ArticleService } from "../services/article.service";
import { ActivatedRoute } from "@angular/router";
import { Article } from "../model/article";
import { UserService } from "../services/user.service";
import { User } from "../model/user";

@Component({
  selector: "sky-article-view",
  templateUrl: "./article-view.component.html",
  styleUrls: ["./article-view.component.css"]
})
export class ArticleViewComponent implements OnInit {
  //author
  userid: string;
  userViewed: User = {
    name: "",
    lastname: "",
    username: "",
    email: "",
    avatar: ""
  };

  articleid: string;
  articleViewed: Article = {
    title: "",
    content: "",
    author: this.userViewed
  };

  constructor(
    private activateroute: ActivatedRoute,
    private articleservice: ArticleService,
    private userservice: UserService
  ) {}

  ngOnInit() {
    this.activateroute.params.subscribe(paramss => {
      this.articleid = paramss.id;
      this.articleservice.getArticleById(this.articleid).subscribe(
        response => {
          console.log("respuesta del servidor: ", response);
          this.articleViewed = response.data;

          //author
          this.userid = '5ab7e9937067c40c803968c9';//this.articleViewed.author._id;
          this.userservice.getUserById(this.userid).subscribe(
            response1 => {
              console.log("AUTHOR - respuesta del servidor: ", response1);
              this.userViewed = response1.data;
            },
            error => {
              console.log("AUTHOR - Error del servidor", error);
            }
          );
          // fin author
        },
        error => {
          console.log("Error del servidor", error);
        }
      );
    });

    //author
    this.activateroute.params.subscribe(paramss => {
      this.userid = '5ab7e9937067c40c803968c9';//this.articleViewed.author._id;
      this.userservice.getUserById(this.userid).subscribe(
        response => {
          console.log("AUTHOR - respuesta del servidor: ", response);
          this.userViewed = response.data;
        },
        error => {
          console.log("AUTHOR - Error del servidor", error);
        }
      );
    });
  }
}

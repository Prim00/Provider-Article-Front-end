import { Component, OnInit } from "@angular/core";
import { ArticleService } from "../services/article.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-list-article",
  standalone: false,

  templateUrl: "./list-article.component.html",
  styleUrl: "./list-article.component.css"
})
export class ListArticleComponent implements OnInit {
  articles: any;
  urlUpload = "http://127.0.0.1:8888/uploadsArticle";

  constructor(private service: ArticleService, private router: Router) {}
  ngOnInit(): void {
    this.service.listArticle().subscribe(data => {
      this.articles = data;
      console.log(data);
    });
  }

  deleteArticle(article: any) {
    let conf = confirm("Are you sure !");
    if (conf == false) {
      return;
    }
    this.service.deleteArticle(article).subscribe(response => {
      console.log(response);
      this.refreshListArticles();
    });
  }
  refreshListArticles() {
    return this.service.listArticle().subscribe(data => {
      this.articles = data;
    });
  }

  updateArticle(myObj: any) {
    return this.router.navigate(["updateArticle" + "/" + myObj["id"]]);
  }
}

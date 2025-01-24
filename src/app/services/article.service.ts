import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ArticleService {
  urlArticle = "http://127.0.0.1:8888/articles";

  article: any;

  constructor(private http: HttpClient) {}

  listArticle() {
    return this.http.get(this.urlArticle);
  }

  createArticle(article: any) {
    return this.http.post(this.urlArticle, article);
  }

  deleteArticle(myObj: any) {
    return this.http.delete(this.urlArticle + "/" + myObj["id"]);
  }

  updateArticle(article: any) {
    console.log("this is the id : " + article.get("id"));
    return this.http.put(this.urlArticle + "/" + article.get("id"), article);
  }

  getArticle(id: any) {
    return this.http.get(this.urlArticle + "/" + id);
  }
}

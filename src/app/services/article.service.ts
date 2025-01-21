import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  urlArticle = "http://127.0.0.1:8888/articles"
  article : any;

  constructor(private http :HttpClient) { }

  listArticle(){
    return this.http.get(this.urlArticle);
  }

  createArticle(myForm:any){
    this.article = {
      'label' : myForm.value.articleLabel,
      'price' : myForm.value.articlePrice,
      'picture' : myForm.value.articlePicture,
    }
    console.log(this.article)
    return this.http.post(this.urlArticle + "/" + myForm.value.providerId,this.article);
  }

  deleteArticle(myObj:any){
    return this.http.delete(this.urlArticle + "/" +myObj['id'])
  }

  updateArticle(myObj:any){
    return this.http.put(this.urlArticle + "/" + myObj["id"],myObj)
  }

  getArticle(id:any){
   return this.http.get(this.urlArticle + "/" +id) 
  }


}

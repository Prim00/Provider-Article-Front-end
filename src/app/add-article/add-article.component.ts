import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Router } from '@angular/router';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-add-article',
  standalone: false,
  
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css'
})
export class AddArticleComponent implements OnInit {

  providers : any;
  selectedFile !: File

  constructor (private service : ArticleService , private serv : ProviderService, private router : Router){}

  ngOnInit(): void {
    this.serv.listProviders().subscribe((data:any) =>{
      this.providers = data;
    })
  }

  
  public onFileChanged(event:any) {
    this.selectedFile = event.target.files[0];
  }

  createArticle(myform:any){
    const article = new FormData()
    article.append("imageFile",this.selectedFile,this.selectedFile.name)
    article.append("label",myform.value.articleLabel)
    article.append("price",myform.value.articlePrice)
    article.append("provider",myform.value.providerId)

    this.service.createArticle(article).subscribe((response:any) =>{
      console.log(response);
      this.router.navigate(['listArticle']);
    })
  }


}

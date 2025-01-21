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

  constructor (private service : ArticleService , private serv : ProviderService, private router : Router){}

  ngOnInit(): void {
    this.serv.listProviders().subscribe((data:any) =>{
      this.providers = data;
    })
  }

  createArticle(myform:any){
    this.service.createArticle(myform).subscribe((response:any) =>{
      console.log(response);
      this.router.navigate(['listArticle']);
    })
  }


}

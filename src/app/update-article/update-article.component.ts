import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-update-article',
  standalone: false,
  
  templateUrl: './update-article.component.html',
  styleUrl: './update-article.component.css'
})
export class UpdateArticleComponent implements OnInit{

constructor(private service :ArticleService , private router : Router, private route : ActivatedRoute){}

public id:any;
public label :any;
public price :any;
public picture :any;
public provider : any;

public articleToUpdate :any;



  ngOnInit(): void {

    this.route.paramMap.subscribe((params:any)=>{
      this.id = params.get("id")

      this.articleToUpdate= this.service.getArticle(this.id).subscribe((data:any)=>{
        this.label = data['label'];
        this.price = data['price'];
        this.picture = data['picture'];
        
        })
      })
    }
    updateArticle(){
      this.articleToUpdate = {
        'id' : this.id,
        'label' : this.label,
        'price' : this.price,
        'picture' : this.picture,
      }

      return this.service.updateArticle(this.articleToUpdate).subscribe(response=>{
        console.log(response)
        this.router.navigate(['listArticle'])
      })


    }
    

    
  }

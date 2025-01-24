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
public urlUpload = "http://127.0.0.1:8888/uploadsArticle";

public id:any;
public label :any;
public price :any;

public oldImage ="";
public newImage ="";


selectedFile !:File

public articleToUpdate :any;



  ngOnInit(): void {

    this.route.paramMap.subscribe((params:any)=>{
      this.id = params.get("id")

      this.articleToUpdate= this.service.getArticle(this.id).subscribe((data:any)=>{
        this.label = data['label'];
        this.price = data['price'];
        this.oldImage = data['picture'];
        
        })
      })
    }

    public onFileChanged(event: any) {
      if (event.target.files[0]) {
        this.selectedFile = event.target.files[0];
      }
    }

    updateArticle(){
      const article = new FormData();
      if(this.selectedFile!=null){
        article.append("picture",this.selectedFile,this.selectedFile.name);
      }
      article.append('label',this.label)
      article.append('price',this.price)
      article.append('id',this.id)


      return this.service.updateArticle(article).subscribe(response=>{
        console.log(response)
        this.router.navigate(['listArticle'])
      })
    }
    
  }

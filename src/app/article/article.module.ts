import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { MainComponent } from './main/main.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainComponent,
    ListArticleComponent,
    AddArticleComponent,
    UpdateArticleComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ArticleRoutingModule
  ]
})
export class ArticleModule { }

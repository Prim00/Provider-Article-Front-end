import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { ListArticleComponent } from './list-article/list-article.component';

const routes: Routes = [
  {
      path: '',
      component: MainComponent,
      children:[
        {
          path: 'listArticle',
         component: ListArticleComponent,
        },
        {
          path: 'addArticle',
         component: AddArticleComponent,
        },
        {
          path: 'updateArticle/:id',
         component: UpdateArticleComponent,
        }
  
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }

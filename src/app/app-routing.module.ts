import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'providers',
    loadChildren: () => import('./provider/provider.module').then(m => m.ProviderModule)
  },
  {
    path: 'articles',
    loadChildren: () => import('./article/article.module').then(m => m.ArticleModule)
  }
  
  //     { path: "", 
  //       pathMatch: "full", 
  //       redirectTo: "app-navbar"
  //    },
  // { path: "listProvider", component: ListProviderComponent}, //canActivate: [AuthGaurdService]},
  // { path: "addProvider", component: AddProviderComponent }, //canActivate: [AuthGaurdService] },
  // { path: "updateProvider/:id", component: UpdateProviderComponent},//canActivate: [AuthGaurdService] },
  // {path : "listArticle" , component : ListArticleComponent },//canActivate: [AuthGaurdService]},
  // {path : "addArticle" , component :AddArticleComponent},//canActivate: [AuthGaurdService] },
  // {path :"updateArticle/:id" , component:UpdateArticleComponent},//canActivate: [AuthGaurdService]},
  // // { path: 'login', component: LoginComponent },
  // // { path: 'logout', component: LogoutComponent} //,canActivate: [AuthGaurdService]},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

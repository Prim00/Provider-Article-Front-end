import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProviderComponent } from './list-provider/list-provider.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { UpdateArticleComponent } from './update-article/update-article.component';


const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "app-navbar" },
  { path: "listProvider", component: ListProviderComponent}, //canActivate: [AuthGaurdService]},
  { path: "addProvider", component: AddProviderComponent }, //canActivate: [AuthGaurdService] },
  { path: "updateProvider/:id", component: UpdateProviderComponent},//canActivate: [AuthGaurdService] },
  {path : "listArticle" , component : ListArticleComponent },//canActivate: [AuthGaurdService]},
  {path : "addArticle" , component :AddArticleComponent},//canActivate: [AuthGaurdService] },
  {path :"updateArticle/:id" , component:UpdateArticleComponent},//canActivate: [AuthGaurdService]},
  // { path: 'login', component: LoginComponent },
  // { path: 'logout', component: LogoutComponent} //,canActivate: [AuthGaurdService]},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

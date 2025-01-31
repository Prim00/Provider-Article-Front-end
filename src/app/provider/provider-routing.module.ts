import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddProviderComponent } from './add-provider/add-provider.component';
import { MainComponent } from './main/main.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';
import { ListProviderComponent } from './list-provider/list-provider.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children:[
      {
        path: 'listProvider',
       component: ListProviderComponent,
      },
      {
        path: 'addProvider',
       component: AddProviderComponent,
      },
      {
        path: 'updateProvider/:id',
       component: UpdateProviderComponent,
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderRoutingModule { }

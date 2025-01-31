import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderRoutingModule } from './provider-routing.module';
import { MainComponent } from './main/main.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { ListProviderComponent } from './list-provider/list-provider.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainComponent,
    AddProviderComponent,
    ListProviderComponent,
    UpdateProviderComponent
  ],
  imports: [
    CommonModule,
    ProviderRoutingModule,
    FormsModule
  ]
})
export class ProviderModule { }

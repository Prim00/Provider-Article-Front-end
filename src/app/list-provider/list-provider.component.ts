import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../services/provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-provider',
  standalone: false,
  
  templateUrl: './list-provider.component.html',
  styleUrl: './list-provider.component.css'
})
export class ListProviderComponent implements OnInit {

  public urlUpload = 'http://127.0.0.1:8888/uploads';

  providers : any;

  constructor(private service : ProviderService ,private router : Router ){}

  ngOnInit() {
    this.refreshListProviders();
      } 

      deleteProvider(myObj: any) {
        let conf=confirm("Are you sure?");
        if(conf == false) return;
        this.service.deleteProvider(myObj).subscribe(response => {
          this.refreshListProviders();
        })
      }
    

  refreshListProviders() {
    this.service.listProviders().subscribe(data =>{
      this.providers = data;
    })
  }

  updateProvider(myObj:any){
    this.router.navigate(["updateProvider" + '/' + myObj['id']]);

  }



}
import { Component, OnInit} from '@angular/core';
import { ProviderService } from '../services/provider.service';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-add-provider',
  standalone: false,

  templateUrl: './add-provider.component.html',
  styleUrl: './add-provider.component.css'
})
export class AddProviderComponent implements OnInit {

  constructor(private service : ProviderService , private router : Router){}

  ngOnInit(): void {
  }

  createProvider(myform:any){ 
    this.service.createProvider(myform).subscribe(
      data =>{
        console.log(data);
        this.router.navigate(['listProvider']);

    });
  }
}

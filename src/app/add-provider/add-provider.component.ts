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

  selectedFile!: File;

  constructor(private service : ProviderService , private router : Router){}

  ngOnInit(): void {
  }

  public onFileChanged(event:any) {
    this.selectedFile = event.target.files[0];
  }
  

  createProvider(myform: any) {
    const provider = new FormData();
    provider.append('imageFile', this.selectedFile,this.selectedFile.name);
    provider.append('name', myform.value.providerName);
    provider.append('email', myform.value.providerEmail);
    provider.append('address', myform.value.providerAdress); 
    this.service.createProvider(provider).subscribe(
      data =>{
        console.log(data);
        this.router.navigate(['listProvider']);

    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../../services/provider.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-provider',
  standalone: false,
  
  templateUrl: './update-provider.component.html',
  styleUrl: './update-provider.component.css'
})
export class UpdateProviderComponent implements OnInit {

  public id:any;
  public name:any;
  public email:any;
  public address:any;
  
  public urlUpload = "http://127.0.0.1:8888/uploads";
  selectedFile!: File;
  public oldImage = "";
  public newImage = "";

  public providerToUpdate:any;


  constructor(private service : ProviderService , private router : Router , private route : ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.id = params.get('id');
    })

    this.providerToUpdate = this.service.getProvider(this.id).subscribe( 
        (response :any) => {
            this.name = response["name"];
            this.email = response["email"];
            this.address = response["address"];
            this.oldImage=response["image"];
    })

  }

  public onFileChanged(event: any) {
    //Select File
    if (event.target.files[0]) {
      this.selectedFile = event.target.files[0];
    }
  }

  updateProvider(){
    const provider = new FormData();
    if (this.selectedFile != null) {
      console.log("info :" + this.selectedFile)
      provider.append('imageFile', this.selectedFile, this.selectedFile.name);
    }
    provider.append('name', this.name);
    provider.append('email', this.email);
    provider.append('address', this.address);
    provider.append('id', this.id);

    return this.service.updateProvider(provider).subscribe(
      response =>{
        console.log(response);
        this.router.navigate(['/providers/listProvider']);
    })
  }

}

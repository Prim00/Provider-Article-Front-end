import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  urlProviders = 'http://127.0.0.1:8888/providers';
  provider: any;

  // username=sessionStorage.getItem("username");
  // password=sessionStorage.getItem("password")

  constructor(private http : HttpClient) { } // injection de dependance

  listProviders(){
    // const headers = new HttpHeaders({Authorization:'basic'+ btoa(this.username+":"+this.password)})
    return this.http.get(this.urlProviders);//,{headers}  
  }

  createProvider(myform: any) {
    this.provider = {
      'name': myform.value.providerName,
      'email': myform.value.providerEmail,
      'address': myform.value.providerAdress
    }
    // const headers = new HttpHeaders({Authorization:'basic'+ btoa(this.username+":"+this.password)})
    return this.http.post(this.urlProviders, this.provider);
  }

  deleteProvider(myObj:any){
    // const headers = new HttpHeaders({Authorization:'basic'+ btoa(this.username+":"+this.password)})
    return this.http.delete(this.urlProviders + '/' + myObj['id']);
  }

  updateProvider(myObj:any){
    // const headers = new HttpHeaders({Authorization:'basic'+ btoa(this.username+":"+this.password)})
    return this.http.put(this.urlProviders + '/' + myObj['id'],myObj);
  }

  getProvider(id:any){
    // const headers = new HttpHeaders({Authorization:'basic'+ btoa(this.username+":"+this.password)})
    return this.http.get(this.urlProviders + '/' + id);
  } 

    
  }





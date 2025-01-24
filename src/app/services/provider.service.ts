import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ProviderService {
  urlProviders = "http://127.0.0.1:8888/providers";

  // username=sessionStorage.getItem("username");
  // password=sessionStorage.getItem("password")

  constructor(private http: HttpClient) {}

  listProviders() {
    return this.http.get(this.urlProviders); //,{headers}
  }

  createProvider(provider: any) {
    const headers = new HttpHeaders();
    headers.append("Content-Type", "multipart/form-data");
    return this.http.post(this.urlProviders, provider, { headers });
  }

  deleteProvider(myObj: any) {
    return this.http.delete(this.urlProviders + "/" + myObj["id"]);
  }

  updateProvider(myObj: any) {
    return this.http.put(this.urlProviders + "/" + myObj["id"], myObj);
  }

  getProvider(id: any) {
    return this.http.get(this.urlProviders + "/" + id);
  }
}

//Header for Authorisation Security
//  // const headers = new HttpHeaders({Authorization:'basic'+ btoa(this.username+":"+this.password)})

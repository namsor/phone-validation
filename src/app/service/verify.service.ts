import { Injectable, Output } from "@angular/core";
import { EventEmitter } from "events";
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VerifyService {

  @Output() asisd=new EventEmitter();
  private domain = 'https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCode';
httpOptions = {
    headers: new HttpHeaders({
      'Accept':  'application/json',
      'x-api-key': '4ac7667457defcf5e4ebdaa6cb985e5d'
    })
  };
  private urls = {
      get: `${this.domain}`,

  }

  constructor(private http: HttpClient) {

  }

  get(data) {
  
      return this.http.get(`${this.urls.get+'/'+data.fname+'/'+data.lname+'/'+data.number}`, this.httpOptions);
  }

  getCountry(code) {
    return this.http.get('https://restcountries.eu/rest/v2/alpha/'+code);
  }
}

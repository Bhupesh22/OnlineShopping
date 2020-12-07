import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddproductdetailsService {

  url : string = "https://localhost:44375/"
  
  //feeding temporary data   
  
  constructor(private http : HttpClient) { }

  getRetailerId(retaileremail:string):Observable<any>{
    return this.http.get(this.url+"get-retailerid?retaileremail="+retaileremail);
  }
  /*insertProduct():Observable<any>{
    const httpheader={headers:new HttpHeaders({'Content-Type':'text/html'})};
    return this.http.post<any>(this.url+"")
  }*/
}

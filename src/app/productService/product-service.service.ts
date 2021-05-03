import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ProductEntity } from 'app/models/product-entity.model';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
 

@Injectable({
  providedIn: 'root'
})

export class ProductServiceService  implements OnInit {
  
product :any []=[];
private _productListUrl="http://localhost:9000/api/products" 
  constructor(private http: HttpClient) { }
  public getProduct() :Observable <any> {
    debugger  ;

  return this.http.get<ProductEntity[]>(this._productListUrl, { 'headers': headers }).pipe(response =>
    response)
    }
  ngOnInit() {
   
  }

}

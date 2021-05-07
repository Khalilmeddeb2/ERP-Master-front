import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { CategoryEntity } from 'app/models/category-entity.model';
import { ProductEntity } from 'app/models/product-entity.model';
import { Observable, throwError } from 'rxjs';
import { filter, map } from 'rxjs/operators';



const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
 

@Injectable({
  providedIn: 'root'
})

export class CategoryService  implements OnInit {
  
product :any []=[];
private categoryURL="http://localhost:9000/api/categorys" 
  constructor(private http: HttpClient) { }
  public getCategories() :Observable <any> {
    

  return this.http.get<CategoryEntity[]>(this.categoryURL, { 'headers': headers }).pipe(response =>
    response)
    }

    public addProduct(body?:ProductEntity,categoryId ? : number) :Observable <ProductEntity> {
      
      console.log(body)
      if (body === null || body === undefined) {
        return throwError("Required parameter body was null or undefined.");
      }
      const headers = new HttpHeaders({ "Content-Type": "application/json" });
  
      return this.http.post<ProductEntity>(
        `${this.categoryURL}/${categoryId}`,
        body,
        { headers: headers }
      );
    
      }

  ngOnInit() {
   
  }

  public deleteProduct(productId?: number) :Observable <ProductEntity> {
      
    console.log(productId)
    if (productId === null || productId === undefined) {
      return throwError("Required parameter body was null or undefined.");
    }
    const headers = new HttpHeaders({ "Content-Type": "application/json" });

    return this.http.delete<any>(
      `${this.categoryURL}/${productId}`,
    
      { headers: headers }
    );
  
    }

}

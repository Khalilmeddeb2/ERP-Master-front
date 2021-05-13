import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderSaleEntity } from 'app/models/order-sale-entity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderSaleServiceService {

  private baseURL=  "http://localhost:9000/api/orderSale";

  constructor(private http: HttpClient) { }

  getOrderSalesList() : Observable<OrderSaleEntity[]>{
    return this.http.get<OrderSaleEntity[]>(`${this.baseURL}`);
  }

  deleteOrderSale(id : number):Observable<Object>
  {
    return this.http.delete(`${this.baseURL}/${id}`);

  }
}

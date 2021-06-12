import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LineSaleService {
  
  private basetUrl="http://localhost:9000/api/LineSale"
  constructor(private http: HttpClient) { }

  deleteOrderSale():Observable<Object>
  {
    return this.http.delete(`${this.basetUrl}`);

  }

  deleteLineSale(id :number):Observable<Object>
  {
    return this.http.delete(`${this.basetUrl}/${id}`);

  }

}

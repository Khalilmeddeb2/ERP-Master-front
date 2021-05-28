import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InvoiceEntity } from 'app/models/invoice-entity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceServiceService {
  private baseURL=  "http://localhost:9000/api/invoices";

  constructor(private http: HttpClient) { }



  getInvoicesList() : Observable<InvoiceEntity[]>{
    return this.http.get<InvoiceEntity[]>(`${this.baseURL}`);
  }
}

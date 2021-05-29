import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaymentEntity } from 'app/models/payment-entity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  private baseURL=  "http://localhost:9000/api/payments";

  constructor(private http: HttpClient) { }


  getPaymentsList() : Observable<PaymentEntity[]>{
    return this.http.get<PaymentEntity[]>(`${this.baseURL}`);
  }

  deletePayment(id : number):Observable<Object>
  {
    return this.http.delete(`${this.baseURL}/${id}`);

  }
}

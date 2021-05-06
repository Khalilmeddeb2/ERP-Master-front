import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { CustomerEntity } from 'app/models/customer-entity';
import { Observable } from 'rxjs';
const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
 


@Injectable({
  providedIn: 'root'
})
export class CustomerServicesService implements OnInit {


  cutomers :any []=[];
  private _customerListUrl="http://localhost:9000/api/customers"

  constructor(private http : HttpClient) { }
  
  
  public getCustomers() : Observable<any>{
    debugger ;
    return this.http.get<CustomerEntity[]> (this._customerListUrl,
       { 'headers': headers }).pipe(response =>response)
    
    }

    ngOnInit(): void {
      
    }


    
    
    
      }
      





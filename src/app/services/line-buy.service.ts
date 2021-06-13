import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LineBuyService {

  private basetUrl="http://localhost:9000/api/lineBuys"

  constructor(private http: HttpClient) { }

  deleteLineBuy(id :number):Observable<Object>
  {
    return this.http.delete(`${this.basetUrl}/${id}`);

  }
}

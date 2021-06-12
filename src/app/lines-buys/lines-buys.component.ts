import { Component, OnInit } from '@angular/core';
import { PurchaseOrder } from 'app/model/purchase-order';
import { LineBuyEntity } from 'app/models/line-buy-entity';

@Component({
  selector: 'app-lines-buys',
  templateUrl: './lines-buys.component.html',
  styleUrls: ['./lines-buys.component.css']
})
export class LinesBuysComponent implements OnInit {
  lineSales : LineBuyEntity[];
  orderSales :PurchaseOrder[];
  id : number;
  displayedColumns: string[] = ['Qt','description', 'orderSale','product','actions'];
  actionDisabled=false;

  constructor() { }

  ngOnInit(): void {
  }

}

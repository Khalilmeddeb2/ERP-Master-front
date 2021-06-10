import { Component, OnInit } from '@angular/core';
import { LineSaleEntity } from 'app/models/line-sale-entity';
import { OrderSaleServiceService } from 'app/services/order-sale-service.service';

@Component({
  selector: 'app-line-sale',
  templateUrl: './line-sale.component.html',
  styleUrls: ['./line-sale.component.css']
})
export class LineSaleComponent implements OnInit {
  lineSales : LineSaleEntity[];
  id : number=3;
  displayedColumns: string[] = ['Qt','description', 'orderSale','product','actions'];

  constructor(private orderSaleService :OrderSaleServiceService) { }

  ngOnInit(): void {
    this.getLinesSales(this.id);
  }

  getLinesSales(id)
  {
    console.log("dada");
    console.log(this.id)
    this.orderSaleService.getLinesSalesForOrderSale(id).subscribe(e=>{

    this.lineSales=e;
    console.log("dadou");
    console.log(e);




    }

    )
  }

}

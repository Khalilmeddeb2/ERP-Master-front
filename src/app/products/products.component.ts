import { Component, OnInit } from '@angular/core';
import { ProductEntity } from 'app/models/product-entity.model';
import { ProductServiceService } from 'app/productService/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductServiceService]
})
export class ProductsComponent implements OnInit {
  constructor(private productServiceService : ProductServiceService) {}
  products :ProductEntity [] ;
  ngOnInit(): void {
    debugger ;
    this.productServiceService.getProduct().subscribe(e=>{
this.products=e
console.log("========>",e) ;

    })
   
  }

}

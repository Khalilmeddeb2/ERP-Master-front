import { Component, OnInit } from '@angular/core';
import { CustomerEntity } from 'app/models/customer-entity';
import { CustomerServicesService } from 'app/services/customer-services.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers : CustomerEntity[];

  constructor(private customerServicesService : CustomerServicesService) { }

  ngOnInit(): void {
    debugger;
    console.log("jhgfdsssssssssssss");
    this.customerServicesService.getCustomers().subscribe(e=>{
      this.customers=e
      console.log(e);
      console.log("jhgfdsssssssssssss");
    })
  }

}

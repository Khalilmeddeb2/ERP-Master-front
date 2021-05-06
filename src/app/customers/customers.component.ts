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
    this.customerServicesService.getCustomers().subscribe(data=>{
      this.customers=data
      console.log(data);
    })
  }

}

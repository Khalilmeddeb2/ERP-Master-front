import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

//* ****
  import {  MatTableModule } from "@angular/material/table";
////////


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MonCompComponent } from './mon-comp/mon-comp.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import { ProviderComponent } from './provider/provider.component';
import { OrderSaleComponent } from './order-sale/order-sale.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { PaymentsComponent } from './payments/payments.component';
import { ProviderService } from './service/provider.service';
import { CreateProviderComponent } from './create-provider/create-provider.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ComponentsModule,
    RouterModule,
    MatTableModule,
    HttpClientModule,
    //
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
   
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    MonCompComponent,
    InvoiceComponent,
    CategoryComponent,
    ProductsComponent,
    CustomersComponent,
    ProviderComponent,
    OrderSaleComponent,
    PurchaseOrderComponent,
    PaymentsComponent,
    CreateProviderComponent,
    UpdateProviderComponent,
  
    

  ],
  providers: [ProviderService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }

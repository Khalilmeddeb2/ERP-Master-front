import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CreateProviderComponent } from './create-provider/create-provider.component';

import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { AddOrEditOrderSaleComponent } from './add-or-edit-order-sale/add-or-edit-order-sale.component';
import { CreatePurchaseOrderComponent } from './create-purchase-order/create-purchase-order.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './security/login/login.component';
// import { LoginComponent } from './login/login.component';

const routes: Routes =[
  {
    path: 'login',
    component: LoginComponent
  },
  {path:'create-customer',component:CreateCustomerComponent},
  {path:'update-customer/:id',component:UpdateCustomerComponent},
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }, 
  {
    path: '',component: AdminLayoutComponent,children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  },
  // {
  //     path: 'login',
  //     children: [ {
  //       path: 'login',
  //       component: LoginComponent
  //   }]},
  
  {path: 'create-provider', component: CreateProviderComponent},
  {path: 'update-provider/:id', component: UpdateProviderComponent},

  //
 
  {path: 'addOrEditOrderSale', component: AddOrEditOrderSaleComponent},

  {path: 'createPurchaseOrder', component: CreatePurchaseOrderComponent}
 
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
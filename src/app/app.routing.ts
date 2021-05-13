import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CreateProviderComponent } from './create-provider/create-provider.component';

import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';

const routes: Routes =[
  {path:'create-customer',component:CreateCustomerComponent},
  {path:'update-customer/:id',component:UpdateCustomerComponent},
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, 
  {
    path: '',component: AdminLayoutComponent,children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  },
  {path: 'create-provider', component: CreateProviderComponent},
  {path: 'update-provider/:id', component: UpdateProviderComponent}
 
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

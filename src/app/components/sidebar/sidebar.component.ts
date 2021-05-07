import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/Invoice', title: 'Invoice',  icon:'receipt', class: '' },
    { path: '/Category', title: 'Category',  icon:'category', class: '' },
    { path: '/Products', title: 'Product',  icon:'local_mall', class: '' },
    { path: '/Customers', title: 'Customer',  icon:'groups', class: '' },
    { path: '/Provider', title: 'Provider',  icon:'transfer_within_a_station', class: '' },
    { path: '/Order-Sale', title: 'Sale-Order',  icon:'add_shopping_cart', class: '' },
    { path: '/Purchase-Order', title: 'Purchase-Order',  icon:'shopping_cart', class: '' },
    { path: '/Payments', title: 'Payments',  icon:'payments', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { CustomersComponent } from './customers/customers.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { CustomersModule } from './customers/customers.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsModule,
    OrdersModule,
    CustomersModule,
    DashboardModule
  ],
})
export class ComponentsModule { }

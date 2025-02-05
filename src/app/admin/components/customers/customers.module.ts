import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { Router } from 'express';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    CommonModule,
     RouterModule.forChild([
      {path: "", component: CustomersComponent},
     ])
  ]
})
export class CustomersModule { }

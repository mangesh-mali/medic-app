import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentCompComponent } from './payment-comp/payment-comp.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'payments', component: PaymentCompComponent }
]


@NgModule({
  declarations: [
    PaymentCompComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class PaymentsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentCompComponent } from './payment-comp/payment-comp.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'payments', component: PaymentCompComponent }
]


@NgModule({
  declarations: [
    PaymentCompComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PaymentsModule { }

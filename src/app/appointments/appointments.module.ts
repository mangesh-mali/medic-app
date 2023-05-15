import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsCompComponent } from './appointments-comp/appointments-comp.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'appointments', component: AppointmentsCompComponent }
]

@NgModule({
  declarations: [
    AppointmentsCompComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AppointmentsModule { }

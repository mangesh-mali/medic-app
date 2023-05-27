import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsCompComponent } from './appointments-comp/appointments-comp.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: 'appointments', component: AppointmentsCompComponent }
]

@NgModule({
  declarations: [
    AppointmentsCompComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    MatPaginatorModule
    // BrowserModule
  ]
})
export class AppointmentsModule { }

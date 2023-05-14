import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardCompComponent } from './dashboard-comp/dashboard-comp.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: DashboardCompComponent }
]

@NgModule({
  declarations: [
    DashboardCompComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ]
})
export class DashboardModule { }

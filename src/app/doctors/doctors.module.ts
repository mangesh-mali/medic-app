import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorCompComponent } from './doctor-comp/doctor-comp.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'doctors', component: DoctorCompComponent }
]

@NgModule({
  declarations: [
    DoctorCompComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DoctorsModule { }

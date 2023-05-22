import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorCompComponent } from './doctor-comp/doctor-comp.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'doctors', component: DoctorCompComponent }
]

@NgModule({
  declarations: [
    DoctorCompComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class DoctorsModule { }

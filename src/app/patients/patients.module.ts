import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientCompComponent } from './patient-comp/patient-comp.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'patients', component: PatientCompComponent }
]

@NgModule({
  declarations: [
    PatientCompComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class PatientsModule { }

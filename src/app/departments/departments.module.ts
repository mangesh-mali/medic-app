import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentCompComponent } from './department-comp/department-comp.component';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentIndividualComponent } from './department-individual/department-individual.component';

const routes: Routes = [
  { path: 'departments', component: DepartmentCompComponent },
  { path: 'department-details/:title', component: DepartmentIndividualComponent }
]

@NgModule({
  declarations: [
    DepartmentCompComponent,
    DepartmentIndividualComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DepartmentsModule { }

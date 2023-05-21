import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentCompComponent } from './department-comp/department-comp.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'departments', component: DepartmentCompComponent }
]

@NgModule({
  declarations: [
    DepartmentCompComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DepartmentsModule { }

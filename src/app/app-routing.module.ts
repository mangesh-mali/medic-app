import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { Gaurd1Guard } from './Gaurds/gaurd1.guard';
import { PageNotFoundCompComponent } from './user/page-not-found-comp/page-not-found-comp.component';
import { DepartmentIndividualComponent } from './departments/department-individual/department-individual.component';
import { Comp1Component } from './user/comp1/comp1.component';
import { Comp2Component } from './user/comp2/comp2.component';
import { ParentComponent } from './user/parent/parent.component';
import { ChildComponent } from './user/child/child.component';
import { LoginComponent } from './user/login/login.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'appointM', loadChildren: () => import('./appointments/appointments.module').then(m => m.AppointmentsModule) },
  { path: 'docM', loadChildren: () => import('./doctors/doctors.module').then(m => m.DoctorsModule) },
  { path: 'depM', loadChildren: () => import('./departments/departments.module').then(m => m.DepartmentsModule) },
  { path: 'patM', loadChildren: () => import('./patients/patients.module').then(m => m.PatientsModule) },
  { path: 'payM', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule), canActivate: [Gaurd1Guard] },
  { path: 'department-details/:title', component: DepartmentIndividualComponent },
  { path: 'comp1', component: Comp1Component },
  { path: 'comp2', component: Comp2Component },
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
  { path: 'signIn', component: LoginComponent },
  { path: '**', component: PageNotFoundCompComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

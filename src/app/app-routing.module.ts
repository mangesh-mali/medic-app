import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { Gaurd1Guard } from './Gaurds/gaurd1.guard';
import { PageNotFoundCompComponent } from './user/page-not-found-comp/page-not-found-comp.component';
import { DepartmentIndividualComponent } from './departments/department-individual/department-individual.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'appointM', loadChildren: () => import('./appointments/appointments.module').then(m => m.AppointmentsModule) },
  { path: 'docM', loadChildren: () => import('./doctors/doctors.module').then(m => m.DoctorsModule) },
  { path: 'depM', loadChildren: () => import('./departments/departments.module').then(m => m.DepartmentsModule) },
  { path: 'patM', loadChildren: () => import('./patients/patients.module').then(m => m.PatientsModule) },
  { path: 'payM', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule), canActivate: [Gaurd1Guard] },
  { path: 'department-details/:title', component: DepartmentIndividualComponent },
  { path: '**', component: PageNotFoundCompComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';

const routes: Routes = [
  { path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'appointM', loadChildren: () => import('./appointments/appointments.module').then(m => m.AppointmentsModule) },
  { path: 'docM', loadChildren: () => import('./doctors/doctors.module').then(m => m.DoctorsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

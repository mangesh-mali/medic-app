import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardCompComponent } from './dashboard-comp/dashboard-comp.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DashPipePipe } from './dash-pipe.pipe';
import { HospitalSurveyChartComponent } from './hospital-survey-chart/hospital-survey-chart.component';
import { HospitalIncomeChartComponent } from './hospital-income-chart/hospital-income-chart.component';
import { PatientChartComponent } from './patient-chart/patient-chart.component';

const routes: Routes = [
  { path: '', component: DashboardCompComponent }
]

@NgModule({
  declarations: [
    DashboardCompComponent,
    DashPipePipe,
    HospitalSurveyChartComponent,
    HospitalIncomeChartComponent,
    PatientChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ]
})
export class DashboardModule { }

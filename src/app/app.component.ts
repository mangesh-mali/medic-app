import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'medic-app';

  public subTitle: any = [
    { logoURL: '../assets/dashboard.png', logoName: 'Dashboard' },
    { logoURL: '../assets/appointments.png', logoName: 'Appointments' },
    { logoURL: '../assets/doctor.png', logoName: 'Doctors' },
    { logoURL: '../assets/department.png', logoName: 'Departments' },
    { logoURL: '../assets/patient.png', logoName: 'Patients' },
    { logoURL: '../assets/payment.png', logoName: 'Payments' },
  ]

  public subTitle2: any = [
    {
      name: 'Service Pages',
      subName: [
        { pg: 'Invoices' },
        { pg: 'Pricing' },
        { pg: 'Edit Account' },
        { pg: 'User Profile' },
      ]
    },
    {
      name: 'Sessions',
      subName: [
        { pg: 'Sign In' },
        { pg: 'Sign Up' },
        { pg: '404' },
        { pg: '500' },
      ]
    }
  ]
}

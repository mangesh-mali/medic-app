import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'medic-app';
  displayStyle = "none";

  public subTitle: any = [
    { logoURL: 'assets/dashboard.png', logoName: 'Dashboard', routeLink: '' },
    { logoURL: 'assets/appointments.png', logoName: 'Appointments', routeLink: 'appointM/appointments' },
    { logoURL: 'assets/doctor.png', logoName: 'Doctors', routeLink: 'docM/doctors' },
    { logoURL: 'assets/department.png', logoName: 'Departments', routeLink: 'depM/departments' },
    { logoURL: 'assets/patient.png', logoName: 'Patients', routeLink: 'patM/patients' },
    { logoURL: 'assets/payment.png', logoName: 'Payments', routeLink: 'payM/payments' },
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
        { pg: 'Sign In', rL: '' },
        { pg: 'Sign Up', rL: '' },
        { pg: '404', rL: 'err' },
        { pg: '500', rL: '' },
      ]
    }
  ]

  gaurdFunction(a: any) {
    console.log(a);
    // if (a == "Payments") {
    //   this.openPopup();
    // }
  }

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    sessionStorage.clear;
    this.displayStyle = "none";
  }

  login(f: any) {
    console.log(f.value);
    sessionStorage.clear;
    sessionStorage.setItem("credentials", JSON.stringify(f.value));
  }
}

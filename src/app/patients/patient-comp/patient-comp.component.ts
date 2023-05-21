import { Component } from '@angular/core';
import { Ser1Service } from 'src/app/Services/ser1.service';

@Component({
  selector: 'app-patient-comp',
  templateUrl: './patient-comp.component.html',
  styleUrls: ['./patient-comp.component.css']
})
export class PatientCompComponent {
  data: any;

  constructor(private ser: Ser1Service) {
    this.getAPI();
  }

  getAPI() {
    this.ser.getPat().subscribe(
      (res: any) => {
        console.log(res);
        this.data = res;
      },
      (err: any) => {
        console.log(err);
      }
    )
  }

  edit(a: any) {

  }

  del(a: any) {

  }

}

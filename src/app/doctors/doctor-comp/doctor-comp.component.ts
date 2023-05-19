import { Component } from '@angular/core';
import { Ser1Service } from 'src/app/Services/ser1.service';

@Component({
  selector: 'app-doctor-comp',
  templateUrl: './doctor-comp.component.html',
  styleUrls: ['./doctor-comp.component.css']
})
export class DoctorCompComponent {
  data: any;

  constructor(private ser: Ser1Service) {
    this.getData();
  }

  getData() {
    this.ser.getDoc().subscribe(
      ((res: any) => {
        console.log(res);
        this.data = res;
      }),
      ((err: any) => { console.log(err); })
    )
  }

}

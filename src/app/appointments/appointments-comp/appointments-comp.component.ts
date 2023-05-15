import { Component } from '@angular/core';
import { Ser1Service } from 'src/app/Services/ser1.service';

@Component({
  selector: 'app-appointments-comp',
  templateUrl: './appointments-comp.component.html',
  styleUrls: ['./appointments-comp.component.css']
})
export class AppointmentsCompComponent {
  data: any;
  displayStyle = "none";

  constructor(private ser: Ser1Service) {
    this.getData();
  }

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  getData() {
    this.ser.getAppointments().subscribe(
      ((res: any) => {
        console.log(res);
        this.data = res;
      }),
      ((err: any) => { console.log(err); })
    )
  }

  edit(i: any) {
    console.log(i);

  }

  del(a: any) {
    console.log(a);

    // this.ser.delAppointments(a).subscribe(
    //   ((res: any) => {
    //     console.log(res);
    //     this.getData();
    //   }),
    //   ((err: any) => { console.log(err); })
    // )

  }

}

import { Component } from '@angular/core';
import { Ser1Service } from 'src/app/Services/ser1.service';
// import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-appointments-comp',
  templateUrl: './appointments-comp.component.html',
  styleUrls: ['./appointments-comp.component.css']
})
export class AppointmentsCompComponent {
  data: any;
  displayStyle = "none";
  addButtonAction: boolean = true;
  addActive: boolean = true;

  //form variables start
  dt: any;
  doc: any;
  eml: any;
  tF: any;
  tT: any;
  idid: any;
  img: any;
  inj: any;
  nm: any;
  num: any;
  //form variables end

  constructor(private ser: Ser1Service) {
    this.getData();
  }

  openPopup() {
    if (this.addActive) {
      this.clearForm();
    }
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
    this.addButtonAction = true;
    this.addActive = true;
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

  basicOpr(f: any) {
    //concat time
    var fromTo = f.value.timeFrom + " - " + f.value.timeTo
    delete f.value.timeFrom;
    delete f.value.timeTo;
    f.value.fromTo = fromTo;

    //add "Dr." prefix
    // debugger
    // var test = f.value.doctor.includes("Dr.");
    if (!f.value.doctor.includes("DR.") && !f.value.doctor.includes("Dr.") && !f.value.doctor.includes("dr.") && !f.value.doctor.includes("doctor") && !f.value.doctor.includes("doc.")) {
      // if (!f.value.doctor.includes("Dr.") && !f.value.doctor.includes("DR.")) {
      f.value.doctor = "Dr. " + f.value.doctor;
    }

    return f;
  }

  addApp(f: any) {
    console.log(f.value);
    f = this.basicOpr(f);

    //call add api
    this.ser.addAppointments(f.value).subscribe(
      ((res: any) => {
        console.log(res);
        this.getData();
      }),
      ((err: any) => { console.log(err); })
    )

    this.clearForm();
    this.closePopup();
  }

  clearForm() {
    //clear form
    var allInputs = document.querySelectorAll('input');
    allInputs.forEach(singleInput => singleInput.value = '');
  }

  edit(i: any) {
    this.addActive = false;
    this.addButtonAction = false;
    this.openPopup();
    console.log(i);

    this.nm = i.name;
    this.num = i.number;
    this.dt = i.date;
    this.doc = i.doctor;
    this.eml = i.email;
    this.inj = i.injury;
    this.idid = i.id;
    this.img = i.img;

    var t1 = i.fromTo.search(' - ');
    this.tF = i.fromTo.slice(0, t1);
    this.tT = i.fromTo.substr(t1 + 3);



  }

  updateApp(f: any) {
    f = this.basicOpr(f);
    f.value.img = this.img;
    f.value.id = this.idid;
    console.log(f.value);
    this.ser.updateAppointment(f.value).subscribe(
      ((res: any) => {
        console.log(res);
        this.getData();
      }),
      ((err: any) => { console.log(err); })
    )

    this.clearForm();
    this.closePopup();
  }

  del(a: any) {
    console.log(a);
    this.ser.delAppointments(a).subscribe(
      ((res: any) => {
        console.log(res);
        this.getData();
      }),
      ((err: any) => { console.log(err); })
    )
  }

}

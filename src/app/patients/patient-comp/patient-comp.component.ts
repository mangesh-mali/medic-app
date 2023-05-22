import { Component } from '@angular/core';
import { Ser1Service } from 'src/app/Services/ser1.service';

@Component({
  selector: 'app-patient-comp',
  templateUrl: './patient-comp.component.html',
  styleUrls: ['./patient-comp.component.css']
})
export class PatientCompComponent {
  data: any;
  displayStyle = "none";
  status: any = ["Approved", "Pending"];
  nm: any;
  ag: any;
  adr: any;
  num: any;
  selStatus: any;
  idd: any;
  image: any;
  gen: any;
  lV: any;

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

  openPopup() {
    // this.clearForm();
    this.displayStyle = "block";
  }

  clearForm() {
    //clear form
    var allInputs = document.querySelectorAll('input');
    allInputs.forEach(singleInput => singleInput.value = '');
  }

  closePopup() {
    this.clearForm();
    this.displayStyle = "none";
  }

  update(f: any) {
    // console.log(f.value);
    var temp = f.value;
    temp.gender = this.gen;
    temp.img = this.image;
    temp.id = this.idd;
    console.log(temp);

    this.ser.updatePat(temp).subscribe(
      (res: any) => {
        console.log(res);
        this.getAPI();
      },
      (err: any) => {
        console.log(err);
      }
    )

    this.closePopup();
  }

  edit(a: any) {
    this.openPopup();
    this.nm = a.name;
    this.ag = a.age;
    this.adr = a.address;
    this.num = a.number;
    this.idd = a.id;
    this.selStatus = a.status;
    this.lV = a.lastVisit;
    this.gen = a.gender;
    this.image = a.img;
  }

  del(a: any, i: any) {
    console.log(a);
    console.log(i);
    this.data.splice(i, 1);
  }

}

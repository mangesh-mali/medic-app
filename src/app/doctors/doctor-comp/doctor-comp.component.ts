import { Component } from '@angular/core';
import { Ser1Service } from 'src/app/Services/ser1.service';

@Component({
  selector: 'app-doctor-comp',
  templateUrl: './doctor-comp.component.html',
  styleUrls: ['./doctor-comp.component.css']
})
export class DoctorCompComponent {
  data: any;
  displayStyle = "none";
  gen: any = ['Male', 'Female'];
  genSelect: any;

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

  openPopup() {
    this.clearForm();
    this.displayStyle = "block";
  }

  clearForm() {
    //clear form
    var allInputs = document.querySelectorAll('input');
    allInputs.forEach(singleInput => singleInput.value = '');
  }

  closePopup() {
    this.displayStyle = "none";
  }

  addDoc(f: any) {
    console.log(f.value);
    var obj = f.value;
    if (obj.gen == "Male") {
      obj.img = "http://medic-app.type-code.pro/assets/content/doctor-400-2.jpg";
    }
    if (obj.gen == "Female") {
      obj.img = "http://medic-app.type-code.pro/assets/content/doctor-400-4.jpg";
    }
    delete obj.gen;
    obj.social = [
      { "icon": "assets/1-removebg-preview.png" },
      { "icon": "assets/2-removebg-preview.png" },
      { "icon": "assets/3-removebg-preview.png" }
    ]
    if (!obj.name.includes("Dr")) {
      obj.name = "Dr. " + obj.name;
    }

    console.log(obj);

    this.ser.addDoc(obj).subscribe(
      ((res: any) => {
        console.log(res);
        this.getData();
      }),
      ((err: any) => { console.log(err); })
    )

    this.clearForm();
    this.closePopup();
  }

}

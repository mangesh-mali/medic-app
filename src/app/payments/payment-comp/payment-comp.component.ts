import { Component } from '@angular/core';
import { Ser1Service } from 'src/app/Services/ser1.service';

@Component({
  selector: 'app-payment-comp',
  templateUrl: './payment-comp.component.html',
  styleUrls: ['./payment-comp.component.css']
})
export class PaymentCompComponent {
  data: any;
  displayStyle = "none";

  constructor(private ser: Ser1Service) {
    this.getData();

  }

  getData() {
    this.ser.getPay().subscribe(
      (res: any) => {
        console.log(res);
        this.data = res;
        this.data.map((x: any) => {
          var temp = x.tax.slice(0, x.tax.indexOf("%"))
          // console.log(temp);
          x.total = (Number(x.charges) - Number(x.discount)) + ((Number(x.charges) - Number(x.discount)) * (Number(temp) / 100));
          // console.log(x.total);
        })
      },
      (err: any) => {
        console.log(err);
      }
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

  addPay(f: any) {
    console.log(f.value);
    var x = f.value
    if (!x.tax.includes("%")) {
      x.tax = x.tax + "%";
    }
    var temp = x.tax.slice(0, x.tax.indexOf("%"))
    x.total = (Number(x.charges) - Number(x.discount)) + ((Number(x.charges) - Number(x.discount)) * (Number(temp) / 100));

    console.log(x);
    this.ser.addPay(x).subscribe(
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

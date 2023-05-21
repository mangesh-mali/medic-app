import { Component } from '@angular/core';
import { Ser1Service } from 'src/app/Services/ser1.service';

@Component({
  selector: 'app-payment-comp',
  templateUrl: './payment-comp.component.html',
  styleUrls: ['./payment-comp.component.css']
})
export class PaymentCompComponent {
  data: any;

  constructor(private ser: Ser1Service) {
    this.getData();
  }

  getData() {
    this.ser.getPay().subscribe(
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

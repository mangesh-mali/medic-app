import { Component } from '@angular/core';
import { Ser1Service } from 'src/app/Services/ser1.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component {
  dt: any;

  constructor(private ser: Ser1Service) {
    this.ser.retrieveData().subscribe(
      (res: any) => {
        console.log(res);
        this.dt = res;
      },
      (err: any) => { console.log(err) },
    )
  }

}

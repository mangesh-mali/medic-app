import { Component } from '@angular/core';
import { Ser1Service } from 'src/app/Services/ser1.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {

  constructor(private ser: Ser1Service) {

  }

  setData() {
    var t1 = prompt('Type Message to be set');
    console.log(t1);
    this.ser.setData(t1);
  }

}

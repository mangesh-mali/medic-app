import { Component } from '@angular/core';
import { Ser1Service } from 'src/app/Services/ser1.service';

@Component({
  selector: 'app-department-comp',
  templateUrl: './department-comp.component.html',
  styleUrls: ['./department-comp.component.css']
})
export class DepartmentCompComponent {
  data: any;

  constructor(private ser: Ser1Service) {
    this.getData();
  }

  getData() {
    this.ser.getDep().subscribe(
      ((res: any) => {
        console.log(res);
        this.data = res;
      }),
      ((err: any) => { console.log(err); })
    )
  }
}

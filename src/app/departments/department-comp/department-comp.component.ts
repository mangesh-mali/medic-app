import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ser1Service } from 'src/app/Services/ser1.service';

@Component({
  selector: 'app-department-comp',
  templateUrl: './department-comp.component.html',
  styleUrls: ['./department-comp.component.css']
})
export class DepartmentCompComponent {
  data: any;

  constructor(private ser: Ser1Service, private router: Router) {
    this.getData();
  }

  getData() {
    this.ser.getDep()
      .then(
        ((res: any) => {
          console.log(res);
          this.data = res;
        })
      )
      .catch(
        (err: any) => { console.log(err); }
      )

  }

  navDetails(a: any) {
    console.log(a);
    this.router.navigateByUrl(`department-details/${a.title}`);
  }
}

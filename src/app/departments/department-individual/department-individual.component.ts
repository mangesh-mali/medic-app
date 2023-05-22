import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ser1Service } from 'src/app/Services/ser1.service';

@Component({
  selector: 'app-department-individual',
  templateUrl: './department-individual.component.html',
  styleUrls: ['./department-individual.component.css']
})
export class DepartmentIndividualComponent {
  titleDep: any;
  data: any;
  depDetails: any = [];

  constructor(private actRoute: ActivatedRoute, private ser: Ser1Service) {
    this.titleDep = this.actRoute.snapshot.params['title'];
    console.log(this.titleDep);
    this.getData();


  }

  getData() {
    this.ser.getDep()
      .then(
        ((res: any) => {
          console.log(res);
          this.data = res;

          this.depDetails = this.data.filter((x: any) => {
            // console.log(x);
            if (x.title == this.titleDep) {
              return x;
            }
          })

          console.log(this.depDetails);
        })
      )
      .catch(
        (err: any) => { console.log(err); }
      )
  }

}

import { Component } from '@angular/core';
import { Ser1Service } from 'src/app/Services/ser1.service';

@Component({
  selector: 'app-dashboard-comp',
  templateUrl: './dashboard-comp.component.html',
  styleUrls: ['./dashboard-comp.component.css']
})

export class DashboardCompComponent {
  public firstRowData: any;
  dataSource: any;

  constructor(private ser: Ser1Service) {
    this.ser.getData().subscribe(
      ((res: any) => {
        console.log(res);
        this.firstRowData = res;
      }),
      ((err: any) => { console.log(err); })
    )

    this.ser.getLastAppData().subscribe(
      ((res: any) => {
        console.log(res);
        this.dataSource = res;
      }),
      ((err: any) => { console.log(err); })
    )
  }

}

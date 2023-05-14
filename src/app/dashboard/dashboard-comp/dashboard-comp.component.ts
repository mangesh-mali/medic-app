import { Component } from '@angular/core';
import { DashSerService } from '../dash-ser.service';

@Component({
  selector: 'app-dashboard-comp',
  templateUrl: './dashboard-comp.component.html',
  styleUrls: ['./dashboard-comp.component.css']
})

export class DashboardCompComponent {
  public firstRowData: any;
  dataSource: any;

  constructor(private ser: DashSerService) {
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

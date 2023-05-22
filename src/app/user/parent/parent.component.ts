import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  parentVar: any = "Parent Data";

  parentEmit: any = "Default Message"

  newParentVar: any

  @ViewChild(ChildComponent) cmp: any;

  parentFunction(a: any) {
    this.parentEmit = a;
  }

  ngAfterViewInit() {
    console.log(this.cmp.viewChildCustomVar);
    this.newParentVar = this.cmp.viewChildCustomVar;
  }

}

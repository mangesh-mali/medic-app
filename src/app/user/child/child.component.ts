import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() childVar: any;

  @Output() childEmit = new EventEmitter<any>()

  childFunction() {
    this.childEmit.emit("Child Shared Data");
  }

  viewChildCustomVar: any = "This is data was stored in Child.ts File"

}

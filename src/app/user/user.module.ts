import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundCompComponent } from './page-not-found-comp/page-not-found-comp.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';



@NgModule({
  declarations: [
    PageNotFoundCompComponent,
    Comp1Component,
    Comp2Component,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }

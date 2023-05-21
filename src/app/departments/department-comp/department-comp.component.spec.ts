import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentCompComponent } from './department-comp.component';

describe('DepartmentCompComponent', () => {
  let component: DepartmentCompComponent;
  let fixture: ComponentFixture<DepartmentCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

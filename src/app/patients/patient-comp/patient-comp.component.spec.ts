import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientCompComponent } from './patient-comp.component';

describe('PatientCompComponent', () => {
  let component: PatientCompComponent;
  let fixture: ComponentFixture<PatientCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

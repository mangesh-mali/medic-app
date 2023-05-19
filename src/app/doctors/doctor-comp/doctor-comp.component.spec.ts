import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorCompComponent } from './doctor-comp.component';

describe('DoctorCompComponent', () => {
  let component: DoctorCompComponent;
  let fixture: ComponentFixture<DoctorCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

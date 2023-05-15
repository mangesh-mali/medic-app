import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsCompComponent } from './appointments-comp.component';

describe('AppointmentsCompComponent', () => {
  let component: AppointmentsCompComponent;
  let fixture: ComponentFixture<AppointmentsCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentsCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

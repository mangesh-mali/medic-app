import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalIncomeChartComponent } from './hospital-income-chart.component';

describe('HospitalIncomeChartComponent', () => {
  let component: HospitalIncomeChartComponent;
  let fixture: ComponentFixture<HospitalIncomeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalIncomeChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalIncomeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

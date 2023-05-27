import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalSurveyChartComponent } from './hospital-survey-chart.component';

describe('HospitalSurveyChartComponent', () => {
  let component: HospitalSurveyChartComponent;
  let fixture: ComponentFixture<HospitalSurveyChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalSurveyChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalSurveyChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentIndividualComponent } from './department-individual.component';

describe('DepartmentIndividualComponent', () => {
  let component: DepartmentIndividualComponent;
  let fixture: ComponentFixture<DepartmentIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentIndividualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

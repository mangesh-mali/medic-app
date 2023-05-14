import { TestBed } from '@angular/core/testing';

import { DashSerService } from './dash-ser.service';

describe('DashSerService', () => {
  let service: DashSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

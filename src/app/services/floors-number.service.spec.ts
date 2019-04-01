import { TestBed } from '@angular/core/testing';

import { FloorsNumberService } from './floors-number.service';

describe('FloorsNumberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FloorsNumberService = TestBed.get(FloorsNumberService);
    expect(service).toBeTruthy();
  });
});

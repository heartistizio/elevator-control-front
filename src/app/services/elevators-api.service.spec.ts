import { TestBed } from '@angular/core/testing';

import { ElevatorsApiService } from './elevators-api.service';

describe('ElevatorsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElevatorsApiService = TestBed.get(ElevatorsApiService);
    expect(service).toBeTruthy();
  });
});

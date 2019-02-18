import { TestBed } from '@angular/core/testing';

import { MonServiceService } from './mon-service.service';

describe('MonServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MonServiceService = TestBed.get(MonServiceService);
    expect(service).toBeTruthy();
  });
});

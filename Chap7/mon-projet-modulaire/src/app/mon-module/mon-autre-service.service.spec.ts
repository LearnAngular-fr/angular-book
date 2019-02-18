import { TestBed } from '@angular/core/testing';

import { MonAutreServiceService } from './mon-autre-service.service';

describe('MonAutreServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MonAutreServiceService = TestBed.get(MonAutreServiceService);
    expect(service).toBeTruthy();
  });
});

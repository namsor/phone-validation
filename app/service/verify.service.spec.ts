import { TestBed } from '@angular/core/testing';

import { VerifyService } from './verify.service';

describe('VerifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VerifyService = TestBed.get(VerifyService);
    expect(service).toBeTruthy();
  });
});

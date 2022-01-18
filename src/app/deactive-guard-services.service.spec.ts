import { TestBed } from '@angular/core/testing';

import { DeactiveGuardServices } from './deactive-guard.services';

describe('DeactiveGuardServices', () => {
  let service: DeactiveGuardServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeactiveGuardServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

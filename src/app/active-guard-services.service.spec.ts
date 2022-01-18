import { TestBed } from '@angular/core/testing';

import { ActiveGuardServicesService } from './active-guard-services.service';

describe('ActiveGuardServicesService', () => {
  let service: ActiveGuardServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveGuardServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

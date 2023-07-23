import { TestBed } from '@angular/core/testing';

import { KontestServicesService } from './kontest-services.service';

describe('KontestServicesService', () => {
  let service: KontestServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KontestServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DesafioMobileService } from './desafio-mobile.service';

describe('DesafioMobileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DesafioMobileService = TestBed.get(DesafioMobileService);
    expect(service).toBeTruthy();
  });
});

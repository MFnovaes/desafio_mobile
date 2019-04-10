import { TestBed } from '@angular/core/testing';

import { FirstTabService } from './first-tab.service';

describe('FirstTabService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirstTabService = TestBed.get(FirstTabService);
    expect(service).toBeTruthy();
  });
});

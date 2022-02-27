import { TestBed } from '@angular/core/testing';

import { PalmeraService } from './palmera.service';

describe('PalmeraService', () => {
  let service: PalmeraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PalmeraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

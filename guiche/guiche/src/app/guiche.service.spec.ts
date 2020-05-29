import { TestBed } from '@angular/core/testing';

import { GuicheService } from './guiche.service';

describe('GuicheService', () => {
  let service: GuicheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuicheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

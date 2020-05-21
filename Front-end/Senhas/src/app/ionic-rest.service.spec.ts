import { TestBed } from '@angular/core/testing';

import { IonicRestService } from './ionic-rest.service';

describe('IonicRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IonicRestService = TestBed.get(IonicRestService);
    expect(service).toBeTruthy();
  });
});

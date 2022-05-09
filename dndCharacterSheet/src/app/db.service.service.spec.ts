import { TestBed } from '@angular/core/testing';

import { DB.ServiceService } from './db.service.service';

describe('DB.ServiceService', () => {
  let service: DB.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DB.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

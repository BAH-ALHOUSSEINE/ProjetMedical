import { TestBed } from '@angular/core/testing';

import { ConsurlationService } from './consurlation.service';

describe('ConsurlationService', () => {
  let service: ConsurlationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsurlationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

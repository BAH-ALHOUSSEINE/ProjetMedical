import { TestBed } from '@angular/core/testing';

import { AuthMedecinService } from './auth-medecin.service';

describe('AuthMedecinService', () => {
  let service: AuthMedecinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthMedecinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { checkIfIsLoggedOnGuard } from './check-if-is-logged-on';

describe('checkIfIsLoggedOnGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => checkIfIsLoggedOnGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { checkIfIsLogoutGuard } from './check-if-is-logout';

describe('checkIfIsLogoutGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => checkIfIsLogoutGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

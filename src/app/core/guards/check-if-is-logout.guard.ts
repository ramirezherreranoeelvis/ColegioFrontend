import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthApi } from '../../infraestructure/pages/login/infrastructure/api/authApi';
import { AuthTokenManager } from '../../infraestructure/services/AuthTokenManager';
import { map } from 'rxjs';

export const checkIfIsLogoutGuard: CanActivateFn = (route, state) => {
      const managedUser = inject(AuthTokenManager);
      const userApi = inject(AuthApi);
      const router = inject(Router);
      const isJsonEmpty = (obj: any) => {
            return Object.keys(obj).length === 0;
      };
      return userApi.isLogged(managedUser.userToken$()!.accessToken).pipe(
            map((data: any) => {
                  if (isJsonEmpty(data) || !data.iat) {
                        router.navigate(['/login']);
                        return false;
                  }
                  return true;
            }),
      );
};

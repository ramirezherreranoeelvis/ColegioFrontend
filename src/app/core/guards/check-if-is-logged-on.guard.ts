import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthTokenManager } from '../../infraestructure/services/AuthTokenManager';
import { AuthApi } from '../../infraestructure/pages/login/infrastructure/api/authApi';
import { map } from 'rxjs';

export const checkIfIsLoggedOnGuard: CanActivateFn = (route, state) => {
      const managedUser = inject(AuthTokenManager);
      const userApi = inject(AuthApi);
      const router = inject(Router);

      const isJsonEmpty = (obj: any) => {
            return Object.keys(obj).length === 0;
      };

      return userApi.isLogged(managedUser.userToken$()!.accessToken).pipe(
            map((data: any) => {
                  if (!isJsonEmpty(data) && data.iat) {
                        // Si el usuario ya está logueado, redirigimos a la raíz '/'
                        router.navigate(['/']);
                        // Y prevenimos el acceso a la ruta (por ejemplo, la página de login)
                        return false;
                  }
                  // Si no está logueado, permitimos el acceso
                  return true;
            }),
      );
};

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthTokenManager } from '../../infraestructure/services/AuthTokenManager';
import { AuthApi } from '../../infraestructure/pages/login/infrastructure/api/authApi';
import { map, catchError, of, Observable } from 'rxjs'; // Importa catchError, of, Observable
import { isJsonEmpty } from '../utils/isJsonEmpty';
import { HttpErrorResponse } from '@angular/common/http'; // Importa HttpErrorResponse

export const checkIfIsLogoutGuard: CanActivateFn = (
      route,
      state,
): Observable<boolean> | boolean => {
      const managedUser = inject(AuthTokenManager);
      const userApi = inject(AuthApi);
      const router = inject(Router);

      const token = managedUser.userToken$()?.accessToken;

      // Si no hay token guardado localmente, definitivamente no está logueado
      if (!token) {
            console.log('Guard (checkIfIsLogoutGuard): No token found, redirecting to login.');
            router.navigate(['/login']);
            return false; // Bloquear acceso a la ruta protegida
      }

      // Si hay token, verificarlo con la API
      return userApi.getTokenInfo(token).pipe(
            map((data: any) => {
                  // Si la API responde y confirma que el token es válido (tiene 'iat')
                  if (!isJsonEmpty(data) && data.iat) {
                        return true; // Permitir acceso a la ruta protegida
                  }

                  // Si la API responde pero el token no es válido
                  console.log(
                        'Guard (checkIfIsLogoutGuard): Invalid token response from API, redirecting to login.',
                  );
                  router.navigate(['/login']);
                  return false; // Bloquear acceso a la ruta protegida
            }),
            catchError((error: any) => {
                  // Si ocurre CUALQUIER error al llamar a la API (conexión, 401, 500, etc.)
                  if (error instanceof HttpErrorResponse && error.status === 0) {
                        console.error(
                              'Guard (checkIfIsLogoutGuard): Connection error while checking token. Redirecting to login.',
                              error.message,
                        );
                  } else {
                        console.error(
                              'Guard (checkIfIsLogoutGuard): API error while checking token. Redirecting to login.',
                              error.message || error,
                        );
                  }

                  // En caso de error, redirigir a login y bloquear acceso
                  router.navigate(['/login']);
                  return of(false); // Retorna un Observable que emite false
            }),
      );
};

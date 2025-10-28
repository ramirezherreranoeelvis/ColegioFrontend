import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthTokenManager } from '../../infraestructure/services/AuthTokenManager';
import { AuthApi } from '../../infraestructure/pages/login/infrastructure/api/authApi';
import { map, catchError, of } from 'rxjs'; // Importa catchError y of
import { isJsonEmpty } from '../utils/isJsonEmpty';
import { HttpErrorResponse } from '@angular/common/http'; // Importa HttpErrorResponse

export const checkIfIsLoggedOnGuard: CanActivateFn = (route, state) => {
      const managedUser = inject(AuthTokenManager);
      const userApi = inject(AuthApi);
      const router = inject(Router);

      // Obtenemos el token ANTES de la llamada a la API
      // Usamos ?. y ?? para manejar el caso de que userToken$() sea null/undefined
      const token = managedUser.userToken$()?.accessToken;

      // Si no hay token localmente, asumimos que no está logueado y permitimos el acceso (a la página de login)
      if (!token) {
            return true; // Permite el acceso a la ruta (login)
      }

      return userApi.getTokenInfo(token).pipe(
            map((data: any) => {
                  // Si la respuesta indica que SÍ está logueado (data tiene iat)
                  if (!isJsonEmpty(data) && data.iat) {
                        // Redirigir al dashboard porque ya está logueado
                        router.navigate(['/horario']);
                        // Prevenir el acceso a la ruta actual (login)
                        return false;
                  }
                  // Si NO está logueado, permitir el acceso a la ruta actual (login)
                  return true;
            }),
            catchError((error: any) => {
                  // Verifica si el error es el específico de conexión (status 0)
                  if (error instanceof HttpErrorResponse && error.status === 0) {
                        console.error('Error de conexión al verificar estado de login:', error.message);
                        // Aquí podrías decidir si quieres mostrar un mensaje al usuario
                        // Redirigir a login (aunque probablemente ya esté ahí) y permitir acceso
                        // router.navigate(['/login']); // Opcional si ya está en login
                        return of(true); // Permite el acceso a la ruta (login) ya que no se pudo verificar
                  }

                  // Para otros tipos de errores de la API (ej. 401, 500), también permitimos ir a login
                  console.error('Error inesperado al verificar estado de login:', error);
                  // router.navigate(['/login']); // Opcional
                  return of(true); // Permite el acceso a la ruta (login)
            }),
      );
};

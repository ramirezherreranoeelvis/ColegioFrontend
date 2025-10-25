import { Injectable, signal } from '@angular/core';
import Token from '../pages/login/infrastructure/interfaces/Itoken';

@Injectable({
      providedIn: 'root',
})
export class AuthTokenManager {
      private userToken = signal<Token | null>({
            accessToken:
                  'eyJhbGciOiJIUzM4NCJ9.eyJpZCI6IjgzYzY0MDAyLTM1YWYtN…Bfx_Cz4qs2y13A-VmJHc-C4pOik_fP9eF_OX4aNdGZm7xmnlY',
            refreshToken:
                  'eyJhbGciOiJIUzM4NCJ9.eyJpZCI6IjgzYzY0MDAyLTM1YWYtN…XPbgOOvOsSrtIWFW9ETQn6wfzDKlnhvP2UyuTC7XT5EILvglw',
            expiresIn: '2025-08-08T06:17:08.181852530Z',
            tokenType: 'Bearer',
            rol: 'TEACHER',
      });

      public readonly userToken$ = this.userToken.asReadonly();

      public setCurrentUser(token: Token): void {
            this.userToken.set(token);
      }

      public clearCurrentUser(): void {
            this.userToken.set(null);
      }
}

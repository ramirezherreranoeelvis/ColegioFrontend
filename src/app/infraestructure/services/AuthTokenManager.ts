import { Injectable, signal } from '@angular/core';
import Token from '../pages/login/infrastructure/interfaces/Itoken';

@Injectable({
      providedIn: 'root',
})
export class AuthTokenManager {
      private userToken = signal<Token>({
            accessToken: '',
            refreshToken: '',
            expiresIn: '',
            tokenType: '',
            rol: '',
      });

      public readonly userToken$ = this.userToken.asReadonly();

      public setCurrentUser(token: Token): void {
            this.userToken.set(token);
      }

      public clearCurrentUser(): void {
            this.userToken.set({
                  accessToken: '',
                  refreshToken: '',
                  expiresIn: '',
                  tokenType: '',
                  rol: '',
            });
      }
}

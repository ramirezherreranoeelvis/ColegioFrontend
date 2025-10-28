// 1. Importa 'Signal' en lugar de 'ReadonlySignal'
import { Injectable, signal, PLATFORM_ID, Inject, WritableSignal, Signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Token from '../pages/login/infrastructure/interfaces/Itoken';

@Injectable({
      providedIn: 'root',
})
export class AuthTokenManager {
      private readonly TOKEN_KEY = 'authToken';
      private isBrowser: boolean;

      private emptyToken: Token = {
            accessToken: '',
            refreshToken: '',
            expiresIn: '',
            tokenType: '',
            rol: '',
      };

      private userToken: WritableSignal<Token>;

      // 2. El tipo correcto es 'Signal<Token>'
      public readonly userToken$: Signal<Token>;

      constructor(@Inject(PLATFORM_ID) private platformId: Object) {
            this.isBrowser = isPlatformBrowser(this.platformId);

            const initialToken = this.loadTokenFromStorage();

            this.userToken = signal<Token>(initialToken);

            // Esto funciona porque .asReadonly() devuelve un Signal<T>
            this.userToken$ = this.userToken.asReadonly();
      }

      // ... (El resto de tus funciones loadTokenFromStorage, setCurrentUser, y clearCurrentUser
      //     no necesitan ningún cambio y están correctas)

      private loadTokenFromStorage(): Token {
            if (!this.isBrowser) {
                  return this.emptyToken;
            }

            try {
                  const storedToken = localStorage.getItem(this.TOKEN_KEY);
                  if (storedToken) {
                        return JSON.parse(storedToken) as Token;
                  }
            } catch (error) {
                  console.error('Error al parsear el token de localStorage', error);
                  localStorage.removeItem(this.TOKEN_KEY);
            }

            return this.emptyToken;
      }

      public setCurrentUser(token: Token): void {
            try {
                  this.userToken.set(token);
                  if (this.isBrowser) {
                        localStorage.setItem(this.TOKEN_KEY, JSON.stringify(token));
                  }
            } catch (error) {
                  console.error('Error al guardar el token en localStorage', error);
            }
      }

      public clearCurrentUser(): void {
            this.userToken.set(this.emptyToken);
            if (this.isBrowser) {
                  localStorage.removeItem(this.TOKEN_KEY);
            }
      }
}

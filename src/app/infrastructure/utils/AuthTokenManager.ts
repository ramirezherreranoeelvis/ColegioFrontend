import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Token from '../../components/pages/login/infrastructure/interfaces/token';

@Injectable({
      providedIn: 'root',
})
export class AuthTokenManager {
      private userToken: BehaviorSubject<Token | null>;

      constructor() {
            this.userToken = new BehaviorSubject<Token | null>(null);
      }
      public get currentUserValue(): Token | null {
            return this.userToken.value;
      }

      public setCurrentUser(token: Token): void {
            this.userToken.next(token);
      }

      public clearCurrentUser(): void {
            this.userToken.next(null);
      }
}

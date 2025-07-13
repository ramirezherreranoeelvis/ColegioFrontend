import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
      providedIn: 'root',
})
export class AuthTokenManager {
      private userToken: BehaviorSubject<string>;

      constructor() {
            this.userToken = new BehaviorSubject<string>('');
      }
      public get currentUserValue(): string {
            return this.userToken.value;
      }

      public setCurrentUser(token: string): void {
            this.userToken.next(token);
      }

      public clearCurrentUser(): void {
            this.userToken.next('');
      }
}

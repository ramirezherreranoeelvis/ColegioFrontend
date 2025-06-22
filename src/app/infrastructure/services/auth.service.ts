import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../core/env/environment.development';

@Injectable({
      providedIn: 'root',
})
export class AuthService {
      private url: string = `${environment.baseUrl}/login`;
      private user: BehaviorSubject<User | null>;

      constructor(private httpClient: HttpClient) {
            this.user = new BehaviorSubject<User | null>(null);
      }

      public login(username: string, password: string): Observable<User> {
            return this.httpClient.get<User>(
                  `${this.url}?username=${username}&password=${password}`,
            );
      }

      public get currentUserValue(): User | null {
            return this.user.value;
      }

      public setCurrentUser(user: User): void {
            this.user.next(user);
      }

      public clearCurrentUser(): void {
            this.user.next(null);
      }
}

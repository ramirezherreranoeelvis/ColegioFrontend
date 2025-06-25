import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../core/env/environment.development';

@Injectable({
      providedIn: 'root',
})
export class AuthService {
      private url: string = `${environment.baseUrl}/login`;
      private userToken: BehaviorSubject<string>;

      constructor(private httpClient: HttpClient) {
            this.userToken = new BehaviorSubject<string>('');
      }

      public login(username: string, password: string): Observable<string> {
            const params = new HttpParams()
                  .set('username', username)
                  .set('password', password);
            return this.httpClient.post<string>(this.url, params, {});
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

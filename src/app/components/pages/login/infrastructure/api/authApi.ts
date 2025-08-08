import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../core/env/environment.development';
import Token from '../interfaces/token';

@Injectable({
      providedIn: 'root',
})
export class AuthApi {
      private url: string = `${environment.baseUrl}/api/auth/login`;

      constructor(private httpClient: HttpClient) {}

      public login(username: string, password: string): Observable<Token> {
            const body = {
                  username: username,
                  password: password,
            };
            return this.httpClient.post<Token>(this.url, body);
      }
}

import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import Token from '../interfaces/Itoken';
import { environment } from '../../../../../core/env/environment.development';

@Injectable({
      providedIn: 'root',
})
export class AuthApi {
      private url: string = `${environment.urlAuth}/api/auth`;

      constructor(private httpClient: HttpClient) {}

      public login(username: string, password: string): Observable<Token> {
            const body = {
                  username: username,
                  password: password,
            };
            return this.httpClient.post<Token>(`${this.url}/login`, body);
      }

      isLogged(token: string) {
            return this.httpClient
                  .get<Token>(`${this.url}/is-logged?token=${token}`)
                  .pipe(map((response: Token) => response.accessToken));
      }
}

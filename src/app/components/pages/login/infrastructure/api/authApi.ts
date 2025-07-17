import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../../core/env/environment.development';

@Injectable({
      providedIn: 'root',
})
export class AuthApi {
      private url: string = `${environment.baseUrl}/login`;

      constructor(private httpClient: HttpClient) {}

      public login(username: string, password: string): Observable<string> {
            const params = new HttpParams()
                  .set('username', username)
                  .set('password', password);
            return this.httpClient.post<string>(this.url, params, {});
      }
}

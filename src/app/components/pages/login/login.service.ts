import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../infrastructure/interfaces/user';

@Injectable({
      providedIn: 'root',
})
export class LoginService {
      private url: string = 'http://localhost:8080/login';

      constructor(private httpClient: HttpClient) {}

      public ingresarAlSistema(
            username: string,
            password: string,
      ): Observable<User> {
            return this.httpClient.get<User>(
                  `${this.url}?username=${username}&password=${password}`,
            );
      }
}

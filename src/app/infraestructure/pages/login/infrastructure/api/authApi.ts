import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import Token from '../interfaces/Itoken';
import { environment } from '../../../../../core/env/environment.development';
import ITokenDecryptResponse from '../interfaces/ITokenDecryptResponse';

@Injectable({
      providedIn: 'root',
})
export class AuthApi {
      private url: string = `${environment.urlAuth}/api/auth`;

      constructor(private http: HttpClient) {}

      public login(username: string, password: string): Observable<Token> {
            const body = {
                  username: username,
                  password: password,
            };
            return this.http.post<Token>(`${this.url}/login`, body);
      }

      /**
       * Llama al endpoint 'decriptionToken' para decodificar un token
       * y obtener su payload (contenido).
       * @param token El JWT que se quiere decodificar.
       * @returns Un Observable con el payload (Claims) del token.
       */
      getTokenInfo(token: string): Observable<string | undefined> {
            // 1. Esta es la URL de tu endpoint POST en Java
            const url = `${this.url}/decriptionToken`;

            // 2. Este es el body JSON que espera tu endpoint
            const body = { token: token };

            // 3. Usamos http.post() y le pasamos la URL y el body
            //    Especificamos que la respuesta será de tipo 'TokenDecryptResponse'
            return this.http.post<ITokenDecryptResponse>(url, body).pipe(
                  // 4. Extraemos el payload decodificado de la respuesta
                  map((resp: ITokenDecryptResponse) => resp.tokenDecript),
            );
      }
}

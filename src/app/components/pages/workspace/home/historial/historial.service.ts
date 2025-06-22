import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
      providedIn: 'root',
})
export class HistorialService {
      private url = 'http://localhost:8080/historial';

      constructor(private httpClient: HttpClient) {}

      public obtenerTemporadas(dniStudent: string): Observable<[]> {
            const params: HttpParams = new HttpParams().set(
                  'dniStudent',
                  dniStudent,
            );
            return this.httpClient.get<[]>(this.url, { params });
      }
}

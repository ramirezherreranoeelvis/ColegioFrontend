import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SemanaHistorial } from '../interfaces/semanaHistorial';

@Injectable({
      providedIn: 'root',
})
export class HistorialIngresoApi {
      private url = 'http://localhost:8080/historial';

      constructor(private httpClient: HttpClient) {}

      public obtenerTemporadas(dniStudent: string): Observable<SemanaHistorial[]> {
            const params: HttpParams = new HttpParams().set(
                  'dniStudent',
                  dniStudent,
            );
            return this.httpClient.get<[]>(this.url, { params });
      }
}

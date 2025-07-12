import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Report } from '../interfaces/report';

@Injectable({
      providedIn: 'root',
})
export class IncidentesService {
      private url = 'http://localhost:8080/incidentes';

      constructor(private httpClient: HttpClient) {}

      public obtenerIncidentes(dni: string): Observable<Report[]> {
            const params = new HttpParams().set('dni', dni);
            return this.httpClient.get<Report[]>(this.url, { params });
      }
}

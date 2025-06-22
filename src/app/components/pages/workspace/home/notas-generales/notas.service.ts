import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Promedios } from '../../../../../infrastructure/interfaces/notas/promedios';

@Injectable({
      providedIn: 'root',
})
export class NotasService {
      private url: string = 'http://localhost:8080/notas';

      constructor(private httpClient: HttpClient) {}

      public obtenerPromediosGenerales(
            dniStudent: string,
            year: string,
      ): Observable<Promedios> {
            const urlPromedioGeneral = `${this.url}/promedios`;
            const params = new HttpParams()
                  .set('dniStudent', dniStudent)
                  .set('year', year);
            return this.httpClient.get<Promedios>(urlPromedioGeneral, {
                  params,
            });
      }
}

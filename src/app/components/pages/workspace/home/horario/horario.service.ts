import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DayHorario } from '../../../../../application/interfaces/horario/dayHorario';

@Injectable({
      providedIn: 'root',
})
export class HorarioService {
      private url: string = 'http://localhost:8080/horario';

      constructor(private httpClient: HttpClient) {}

      public obtenerHorarioPorTemporada(
            year: string,
            dniStudent: string,
      ): Observable<DayHorario[]> {
            const urlHorarioMatricula = `${this.url}/horario`;
            const params = new HttpParams()
                  .set('year', year)
                  .set('dniStudent', dniStudent);
            return this.httpClient.get<DayHorario[]>(urlHorarioMatricula, {
                  params,
            });
      }
}

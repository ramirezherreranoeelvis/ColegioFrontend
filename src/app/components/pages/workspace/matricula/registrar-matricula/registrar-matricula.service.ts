import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DayHorario } from '../../../../../infrastructure/interfaces/horario/dayHorario';
import { Student } from '../../../../../infrastructure/interfaces/student';

@Injectable({
      providedIn: 'root',
})
export class RegistrarMatriculaService {
      private urlEnrollment: string = 'http://localhost:8080/enrollment';

      constructor(private httpClient: HttpClient) {}

      public getHorarioMatricula(
            idEnrollment: number,
      ): Observable<DayHorario[]> {
            const params = new HttpParams().set(
                  'idEnrollment',
                  idEnrollment.toString(),
            );
            const urlHorarioMatricula = `${this.urlEnrollment}/horario`;
            return this.httpClient.get<DayHorario[]>(urlHorarioMatricula, {
                  params,
            });
      }

      public registrarMatricula(student: Student): Observable<string> {
            var idEnrollment: number = student.nextEnrollment.idEnrollment;
            var dniStudent: string = student.dni;
            const params = new HttpParams()
                  .set('dniStudent', dniStudent)
                  .set('idEnrollment', idEnrollment.toString());
            const urlRegistrarMatricula = `${this.urlEnrollment}/registrar`;
            return this.httpClient.post<string>(urlRegistrarMatricula, null, {
                  params,
            });
      }
}

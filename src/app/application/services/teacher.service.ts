import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '../interfaces/cursos/curso';
import { environment } from '../../core/env/environment.development';
@Injectable({
      providedIn: 'root',
})
export class TeacherService {
      url: string = `${environment.baseUrl}/teacher`;

      constructor(private httpClient: HttpClient) {}

      public findCoursesByTeacherAndYear(
            dniTeacher: string,
            year: string,
      ): Observable<Curso[]> {
            const params = new HttpParams()
                  .set('dni', dniTeacher)
                  .set('year', year);
            return this.httpClient.get<Curso[]>(`${this.url}/courses`, {
                  params,
            });
      }
}

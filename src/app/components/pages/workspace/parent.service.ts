import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../../../infrastructure/interfaces/student';

@Injectable({
      providedIn: 'root',
})
export class ParentService {
      private urlParent: string = 'http://localhost:8080/parent';
      constructor(private httpClient: HttpClient) {}

      public getStudent(dniParent: string): Observable<Student[]> {
            const params = new HttpParams().set('dniParent', dniParent);
            const urlGetStudent = `${this.urlParent}/students`;
            return this.httpClient.get<Student[]>(urlGetStudent, { params });
      }
}

import { Component, computed, inject, signal } from '@angular/core';
import { CursoService } from './infrastructure/api/cursos.service';
import { TeacherService } from './infrastructure/api/teacher.service';
import { TemporadaService } from '../../infrastructura/api/temporada.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of, switchMap } from 'rxjs';
import { TemplateCursos } from '../../../../../components/templates/workspace/courses/cursos';

@Component({
      selector: 'page-cursos',
      imports: [TemplateCursos],
      template: `
            <!-- <template-cursos
                  [courses]="coursesList()"
                  [seasonList]="seasonsList()"
            /> -->
            <template-cursos />
      `,
})
export default class PageCursos {
      /* services */
      private teacherService = inject(TeacherService);
      private cursoService = inject(CursoService);
      private temporadaService = inject(TemporadaService);

      /* signals */
      protected dniUser = signal('10234567');
      protected rol = signal('teacher');
      protected seasonCourses = signal('');

      coursesList = toSignal(
            computed(() => {
                  const dni = this.dniUser();
                  if (dni === '0') return of([]);
                  if (this.rol() === 'teacher') {
                        return this.teacherService.findCoursesByTeacherAndYear(
                              this.dniUser(),
                              this.seasonCourses()
                        );
                  } else {
                        return this.cursoService.findCursosByStudentByYear(
                              this.dniUser(),
                              this.seasonCourses()
                        );
                  }
            })().pipe(
                  catchError((error) => {
                        console.error('Error al obtener los cursos:', error);
                        return of([]);
                  })
            ),
            { initialValue: [] }
      );

      seasonsList = toSignal(
            computed(() => {
                  return this.temporadaService.findAllSeasonByStudent(this.dniUser());
            })().pipe(
                  catchError((error) => {
                        console.error('Error al obtener las temporadas:', error);
                        return of([]);
                  }),
                  switchMap((seasons) => of(seasons.map((t) => ({ id: t.year, value: t.year }))))
            ),
            { initialValue: [] }
      );
}

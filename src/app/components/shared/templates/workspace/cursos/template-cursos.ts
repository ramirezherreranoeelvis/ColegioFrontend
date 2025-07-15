import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { CursoService } from '../../../../pages/workspace/infrastructura/api/cursos.service';
import { TeacherService } from '../../../../pages/workspace/infrastructura/api/teacher.service';
import { TemporadaService } from '../../../../pages/workspace/infrastructura/api/temporada.service';
import {
      Curso,
      RecursoContenidoCurso,
} from '../../../../pages/workspace/infrastructura/interfaces/cursos/curso';
import { Temporada } from '../../../../pages/workspace/infrastructura/interfaces/Temporada';
import List from '../../../atoms/select-list/list';
import { FormsModule } from '@angular/forms';
import { CardCourse } from '../../../molecules/cards/card-course/course-card';
import { InputTextComponent } from '../../../atoms/input-text/input-text.component';
import { MenuExitComponent } from '../../../molecules/menu-exit/menu-exit.component';
import { SelectListComponent } from '../../../atoms/select-list/select-list.component';
import { RecursoComponent } from '../../../molecules/recurso/recurso.component';
import { CourseContentComponent } from '../../../organisms/course-content/course-content.component';
import { AtomLabel } from '../../../atoms/label/label';

@Component({
      selector: 'template-cursos',
      imports: [
            FormsModule,
            RecursoComponent,
            CardCourse,
            CourseContentComponent,
            MenuExitComponent,
            SelectListComponent,
            InputTextComponent,
            AtomLabel,
      ],
      templateUrl: './template-cursos.component.html',
      styleUrl: './template-cursos.scss',
})
export class TemplateCursos implements OnInit {
      //diseño
      protected ver: string = 'cursos';
      protected cursoCodeSelect: string | null = null;
      //metodos de diseño
      protected async verSeleccionado(contenido: string, codigo: string | any) {
            this.ver = contenido;

            if (codigo) {
                  if (this.ver == 'curso') {
                        this.cursoCodeSelect = codigo;
                        try {
                              this.cursoSelect = await firstValueFrom(
                                    this.cursoService.verCursoSeleccionadoByStudent(
                                          codigo,
                                          this.dniStudent,
                                    ),
                              );
                        } catch (error) {
                              console.log(error);
                        }
                  } else if (this.ver == 'recurso') {
                        this.recursoSelect = codigo;
                  }
            } else {
                  if (this.ver == 'curso') {
                        alert('No hay un curso seleccionado');
                        this.ver = 'cursos';
                  } else if (this.ver == 'recurso') {
                        alert('No hay un recurso seleccionado');
                        this.ver = 'cursos';
                  } else if (this.ver == 'cursos') {
                        this.cursoCodeSelect = null;
                  }
            }
      }

      protected viewResource(event: {
            contenido: string;
            codigo: string | any;
      }): void {
            this.verSeleccionado(event.contenido, event.codigo);
      }

      //datos:
      protected cursos: Curso[] = [];
      protected nameFind = '';
      protected dniStudent = '21787088';
      protected temporadas!: Temporada[];
      protected cursoSelect!: Curso;
      protected recursoSelect!: RecursoContenidoCurso;
      protected temporadasLst!: List[];

      setNameFind(nameFind: string) {
            this.nameFind = nameFind;
      }

      constructor(
            private teacherService: TeacherService,
            private cursoService: CursoService,
            private temporadaService: TemporadaService,
      ) {}

      public ngOnInit(): void {
            this.getSeasionByStudent();
      }

      async getSeasionByStudent() {
            try {
                  this.temporadas = await firstValueFrom(
                        this.temporadaService.findAllSeasonByStudent(
                              this.dniStudent,
                        ),
                  );

                  this.temporadasLst = this.temporadas.map((t) => {
                        return { id: t.year, value: t.year } as List;
                  });
            } catch (error) {
                  console.log(error);
            }
      }

      protected rol: string = 'teacher';
      protected async updateDataCoursesSelect(year: string) {
            if (year == '0') {
                  this.cursos.length = 0;
                  return;
            }
            try {
                  if (this.rol === 'teacher') {
                        this.cursos = await firstValueFrom(
                              this.teacherService.findCoursesByTeacherAndYear(
                                    '10234567',
                                    '2025',
                              ),
                        );
                  } else {
                        this.cursos = await firstValueFrom(
                              this.cursoService.findCursosByStudentByYear(
                                    this.dniStudent,
                                    year,
                              ),
                        );
                  }
            } catch (error) {
                  console.log(error);
            }
      }
}

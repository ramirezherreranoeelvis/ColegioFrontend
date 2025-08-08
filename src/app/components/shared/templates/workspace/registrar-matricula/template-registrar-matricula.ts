import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ParentService } from '../../../../pages/workspace/infrastructura/api/parent.service';
import { RegistrarMatriculaService } from '../../../../pages/workspace/infrastructura/api/registrar-matricula.service';
import { DayHorario } from '../../../../pages/workspace/infrastructura/interfaces/horario/dayHorario';
import { TurnoHorario } from '../../../../pages/workspace/infrastructura/interfaces/horario/turnoHorario';
import { Enrollment } from '../../../../pages/workspace/infrastructura/interfaces/registrarMatricula/nextEnrollment';
import { Student } from '../../../../pages/workspace/infrastructura/interfaces/student';
import List from '../../../atoms/select/list';
import { AtomSelect } from '../../../atoms/select/select';
import { AtomText } from '../../../atoms/text/text';

@Component({
      selector: 'template-registrar-matricula',
      imports: [AtomSelect, AtomText],
      templateUrl: './template-registrar-matricula.component.html',
      styleUrl: './template-registrar-matricula.scss',
})
export class TemplateRegistrarMatricula implements OnInit {
      protected dniParent: string = '99233923';
      protected studentSelectDNI!: string;
      protected studentSelect: Student | null = null;
      protected matricula: Enrollment | null = null;
      protected students!: Student[];
      protected days: string[] = [];
      protected horario: TurnoHorario[] = [];
      stutentList: List[] = [];

      public ngOnInit(): void {
            this.getStudents();
      }
      async getStudents() {
            try {
                  this.students = await firstValueFrom(
                        this.parentService.getStudent(this.dniParent),
                  );
                  this.stutentList = this.students.map((student) => {
                        return {
                              id: student.dni,
                              value: `${student.name} ${student.surnamePaternal} ${student.surnameMaternal}`,
                        };
                  });
            } catch (error) {
                  console.error('Error fetching students', error);
            }
      }

      constructor(
            private registrarMatriculaService: RegistrarMatriculaService,
            private parentService: ParentService,
      ) {}

      public registrarMatricula(): void {
            if (this.studentSelect) {
                  this.registrarMatriculaService
                        .registrarMatricula(this.studentSelect)
                        .subscribe(
                              (message) => {
                                    alert(message);
                              },
                              (error) => {
                                    console.log(error);
                                    alert(error.error);
                              },
                        );
            } else {
                  alert('Seleccione un Estudiante para matricular');
            }
      }

      public updateDataStudentSelect(dni: string): void {
            //si no se escojio ninguno los datos se borran
            this.studentSelectDNI = dni;
            if (this.studentSelectDNI == '0') {
                  this.studentSelect = null;
                  this.matricula = null;
                  return;
            }
            this.studentSelect =
                  this.students.find((s) => s.dni == this!.studentSelectDNI) ??
                  null;
            this.matricula = this.studentSelect!.nextEnrollment;
            this.registrarMatriculaService
                  .getHorarioMatricula(8)
                  .subscribe((data: DayHorario[]) => {
                        //borramos los dias para volver a llenarlo:
                        this.days = [];
                        this.days = data
                              .filter((horario) => horario.cursos.length !== 0)
                              .map((horario) => horario.day);

                        //borramos el horario para llenarlo:
                        this.horario = [];
                        data.forEach((day) => {
                              day.cursos.forEach((curso) => {
                                    // Obtener solo la hora y el minuto
                                    const [startHour, startMinute] =
                                          curso.startTime.split(':');
                                    const [endHour, endMinute] =
                                          curso.endTime.split(':');
                                    const startTime = `${startHour}:${startMinute}`;
                                    const endTime = `${endHour}:${endMinute}`;

                                    const existingHorario = this.horario.find(
                                          (h) =>
                                                h.startTime === startTime &&
                                                h.endTime === endTime,
                                    );
                                    if (existingHorario) {
                                          existingHorario.cursos.push(
                                                curso.event,
                                          );
                                    } else {
                                          this.horario.push({
                                                startTime: startTime,
                                                endTime: endTime,
                                                cursos: [curso.event],
                                          });
                                    }
                              });
                        });
                  });
      }
}

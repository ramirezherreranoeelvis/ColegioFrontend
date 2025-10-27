import { Component, input } from '@angular/core';
import { AtomText } from '../../../atoms/text/text';
import { AtomSelect } from '../../../atoms/select/select';
import List from '../../../atoms/select/list';
import { Student } from '../../../../infraestructure/pages/workspace/infrastructura/interfaces/student';
import { Enrollment } from '../../../../infraestructure/pages/workspace/infrastructura/interfaces/registrarMatricula/nextEnrollment';
import { DayHorario } from '../../../../infraestructure/pages/workspace/pages/horario/infrastructura/interfaces/dayHorario';
import { TableHorario } from '../../../organims/tables/horario/horario';

@Component({
      selector: 'template-registrar-matricula',
      imports: [AtomText, AtomSelect, TableHorario],
      templateUrl: './registrar-matricula.component.html',
      styleUrl: './registrar-matricula.scss',
})
export class TemplateRegistrarMatricula {
      studentList = input<List[]>([
            { id: '12345678', value: 'Juan Perez' },
            { id: '87654321', value: 'Maria Gomez' },
            { id: '11223344', value: 'Carlos Sanchez' },
      ]);

      studentSelect: Student | null = null;

      matricula: Enrollment = {
            idEnrollment: 1,
            startDate: '2024-09-01',
            nameGrade: 'Primero de Secundaria',
            vacancies: 30,
            enrolled: 25,
            cost: 500.0,
            monthlyFee: 50.0,
      };

      daysHorario = input<DayHorario[]>([
            {
                  day: 'Lunes',
                  cursos: [
                        {
                              event: 'química',
                              startTime: '08:00:00',
                              endTime: '09:00:00',
                        },
                        {
                              event: 'aritmética',
                              startTime: '09:10:00',
                              endTime: '10:10:00',
                        },
                        {
                              event: 'geometría',
                              startTime: '10:40:00',
                              endTime: '11:40:00',
                        },
                        {
                              event: 'álgebra',
                              startTime: '11:50:00',
                              endTime: '12:50:00',
                        },
                  ],
            },
            {
                  day: 'Martes',
                  cursos: [
                        {
                              event: 'razonamiento matemático',
                              startTime: '08:00:00',
                              endTime: '09:00:00',
                        },
                        {
                              event: 'razonamiento verbal',
                              startTime: '09:10:00',
                              endTime: '10:10:00',
                        },
                        {
                              event: 'literatura',
                              startTime: '10:40:00',
                              endTime: '11:40:00',
                        },
                        {
                              event: 'física',
                              startTime: '11:50:00',
                              endTime: '12:50:00',
                        },
                  ],
            },
            {
                  day: 'Miercoles',
                  cursos: [
                        {
                              event: 'historia universal',
                              startTime: '08:00:00',
                              endTime: '09:00:00',
                        },
                        {
                              event: 'cómputo',
                              startTime: '09:10:00',
                              endTime: '10:10:00',
                        },
                        {
                              event: 'ingles',
                              startTime: '10:40:00',
                              endTime: '11:40:00',
                        },
                        {
                              event: 'biología',
                              startTime: '11:50:00',
                              endTime: '12:50:00',
                        },
                  ],
            },
            {
                  day: 'Jueves',
                  cursos: [
                        {
                              event: 'economía',
                              startTime: '08:00:00',
                              endTime: '09:00:00',
                        },
                        {
                              event: 'educación física',
                              startTime: '09:10:00',
                              endTime: '10:10:00',
                        },
                        {
                              event: 'geografía',
                              startTime: '10:40:00',
                              endTime: '11:40:00',
                        },
                        {
                              event: 'lenguaje',
                              startTime: '11:50:00',
                              endTime: '12:50:00',
                        },
                  ],
            },
            {
                  day: 'Viernes',
                  cursos: [
                        {
                              event: 'ortografía',
                              startTime: '08:00:00',
                              endTime: '09:00:00',
                        },
                        {
                              event: 'cívica',
                              startTime: '09:10:00',
                              endTime: '10:10:00',
                        },
                        {
                              event: 'historia del perú',
                              startTime: '10:40:00',
                              endTime: '11:40:00',
                        },
                        {
                              event: 'trigonometría',
                              startTime: '11:50:00',
                              endTime: '12:50:00',
                        },
                  ],
            },
      ]);

      updateDataStudentSelect(event: string) {}

      registrarMatricula() {}
}

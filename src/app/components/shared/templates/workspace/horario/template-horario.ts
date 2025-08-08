import { Component, input, output } from '@angular/core';
import { DayHorario } from '../../../../pages/workspace/infrastructura/interfaces/horario/dayHorario';
import List from '../../../atoms/select/list';
import { FormsModule } from '@angular/forms';
import { AtomSelect } from '../../../atoms/select/select';
import { TableHorario } from '../../../organisms/tables/table-horario/table-horario';
import { AtomText } from '../../../atoms/text/text';
import { AtomButton } from '../../../atoms/button/button';

@Component({
      selector: 'template-horario',
      imports: [
            FormsModule,
            AtomSelect,
            TableHorario,
            AtomText,
            AtomButton,
      ],
      templateUrl: './template-horario.component.html',
})
export class TemplateHorario {
      studentSelectDNI: string = '0';

      studentsList = input<List[]>([
            {
                  id: '00000001',
                  value: 'child-1',
            },
            {
                  id: '00000002',
                  value: 'child-2',
            },
      ]);

      temporadasList = input<List[]>([
            {
                  id: '2024',
                  value: '2024',
            },
            {
                  id: '2025',
                  value: '2025',
            },
      ]);

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

      changeChild = output<string>();
      changeChildHorario = output<{ year: string; dni: string }>();

      horarioView = false;

      protected changeChildEvent = (dni: string) => {
            this.studentSelectDNI = dni;
            if (dni == '0') {
                  this.horarioView = false;
                  return;
            }
            this.changeChild.emit(dni);
      };

      protected changeChildHorarioEvent = (year: string, dni: string) => {
            if (year == '0') {
                  this.horarioView = false;
                  return;
            }
            this.horarioView = true;
            this.changeChildHorario.emit({ year, dni });
      };

      protected donwloadHorario = () => {};
}

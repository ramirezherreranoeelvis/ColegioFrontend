import { Component, Input, OnChanges } from '@angular/core';
import { DayHorario } from '../../../../infrastructure/interfaces/horario/dayHorario';
import { TurnoHorario } from '../../../../infrastructure/interfaces/horario/turnoHorario';

@Component({
      selector: 'table-horario',
      imports: [],
      templateUrl: './table-horario.component.html',
      styleUrl: './table-horario.component.scss',
})
export class TableHorarioComponent implements OnChanges {
      @Input() dayHorarioList!: DayHorario[];
      protected days: string[] = [];
      protected horario: TurnoHorario[] = [];
      ngOnChanges(): void {
            console.log('los days horarioList: ', this.dayHorarioList);
            this.initDays();
            this.initHorario();
      }
      initDays() {
            //borramos los dias para volver a llenarlo:
            this.days = [];
            this.days = this.dayHorarioList
                  .filter((horario) => horario.cursos.length !== 0)
                  .map((horario) => horario.day);
      }
      initHorario() {
            //borramos el horario para llenarlo:
            this.horario = [];
            this.dayHorarioList.forEach((day) => {
                  day.cursos.forEach((curso) => {
                        // Obtener solo la hora y el minuto
                        const [startHour, startMinute] =
                              curso.startTime.split(':');
                        const [endHour, endMinute] = curso.endTime.split(':');
                        const startTime = `${startHour}:${startMinute}`;
                        const endTime = `${endHour}:${endMinute}`;

                        const existingHorario = this.horario.find(
                              (h) =>
                                    h.startTime === startTime &&
                                    h.endTime === endTime,
                        );
                        if (existingHorario) {
                              existingHorario.cursos.push(curso.event);
                        } else {
                              this.horario.push({
                                    startTime: startTime,
                                    endTime: endTime,
                                    cursos: [curso.event],
                              });
                        }
                  });
            });
      }
}

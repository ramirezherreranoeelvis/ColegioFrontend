import { Component, computed, input } from '@angular/core';
import { DayHorario } from '../../../../infraestructure/pages/workspace/pages/horario/infrastructura/interfaces/dayHorario';
import { TurnoHorario } from '../../../../infraestructure/pages/workspace/pages/horario/infrastructura/interfaces/turnoHorario';

@Component({
      selector: 'table-horario',
      templateUrl: './horario.component.html',
})
export class TableHorario {
      dayHorarioList = input<DayHorario[]>([]);
      protected days = computed(() => {
            return this.dayHorarioList()
                  .filter((horario) => horario.cursos.length > 0)
                  .map((horario) => horario.day);
      });

      protected horario = computed(() => {
            const list = this.dayHorarioList();
            const turnosMap = new Map<string, TurnoHorario>();

            list.forEach((day) => {
                  day.cursos.forEach((curso) => {
                        const key = `${curso.startTime}-${curso.endTime}`;

                        if (!turnosMap.has(key)) {
                              turnosMap.set(key, {
                                    startTime: curso.startTime.substring(0, 5),
                                    endTime: curso.endTime.substring(0, 5),
                                    cursos: [],
                              });
                        }
                        turnosMap.get(key)!.cursos.push(curso.event);
                  });
            });

            // Convertimos el mapa a un arreglo y lo ordenamos por hora de inicio.
            return Array.from(turnosMap.values()).sort((a, b) =>
                  a.startTime.localeCompare(b.startTime),
            );
      });

      mapToHourMinute = (time: string) => {
            const [startHour, startMinute] = time.split(':');
            return `${startHour}:${startMinute}`;
      };
}

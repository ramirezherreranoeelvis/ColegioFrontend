import { Component, input } from '@angular/core';
import { SemanaHistorial } from '../../../../infraestructure/pages/workspace/sub-pages/historial/infrastruture/interfaces/semanaHistorial';

@Component({
      selector: 'table-attendance-history',
      imports: [],
      templateUrl: './attendance-history.component.html',
      styleUrl: './attendance-history.scss',
})
export class TableAttendanceHistory {
      historial = input<SemanaHistorial[]>([]);

      getClasesEntradaSalida(status: string, isFinal: boolean, type: string): string {
            let clases: string = 'date ';
            if (isFinal) {
                  if (status === 'asistio') {
                        clases += 'asistencia final-' + type;
                  } else if (status === 'falto') {
                        'falta final-' + type;
                  } else {
                        clases += 'date final-' + type;
                  }
            } else {
                  if (status === 'asistio') {
                        clases += ' asistencia';
                  } else if (status === 'falto') {
                        clases += ' falta';
                  } else {
                        clases = ' date';
                  }
            }
            return clases;
      }
}

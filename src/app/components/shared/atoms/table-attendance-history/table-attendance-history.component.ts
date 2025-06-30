import { Component, Input } from '@angular/core';
import { SemanaHistorial } from '../../../../application/interfaces/semanaHistorial';

@Component({
      selector: 'table-attendance-history',
      imports: [],
      templateUrl: './table-attendance-history.component.html',
      styleUrl: './table-attendance-history.component.scss',
})
export class TableAttendanceHistoryComponent {
      @Input() historial: SemanaHistorial[] = [];

      getClasesEntradaSalida(
            status: string,
            isFinal: boolean,
            type: string,
      ): string {
            let clases: string =
                  'history__body-item history__body-date history__body-item--';
            if (isFinal) {
                  if (status === 'asistio') {
                        clases +=
                              'asistencia history__body-item--final-' + type;
                  } else if (status === 'falto') {
                        clases += 'falta history__body-item--final-' + type;
                  } else {
                        clases += 'final-' + type;
                  }
            } else {
                  if (status === 'asistio') {
                        clases += 'asistencia';
                  } else if (status === 'falto') {
                        clases += 'falta';
                  } else {
                        clases = 'history__body-item history__body-date';
                  }
            }
            console.log(clases);

            return clases;
      }
}

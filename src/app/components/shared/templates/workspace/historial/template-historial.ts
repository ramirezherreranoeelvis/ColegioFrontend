import { Component, input } from '@angular/core';
import { SemanaHistorial } from '../../../../pages/workspace/sub-pages/historial/infrastruture/interfaces/semanaHistorial';
import { AtomSelect } from '../../../atoms/select/select';
import { TableAttendanceHistory } from '../../../organisms/tables/table-attendance-history/table-attendance-history';
import { AtomLabel } from '../../../atoms/label/label';

@Component({
      selector: 'template-historial',
      imports: [AtomSelect, TableAttendanceHistory, AtomLabel],
      templateUrl: './template-historial.component.html',
      styleUrl: './template-historial.scss',
})
export class TemplateHistorial {
      historial = input<SemanaHistorial[]>([
            {
                  name: 'semana actual',
                  dias: [
                        {
                              name: 'Lunes',
                              entrada: {
                                    content: '14/07/2025 08:01',
                                    status: 'asistio',
                              },
                              salida: {
                                    content: '14/07/2025 17:32',
                                    status: 'asistio',
                              },
                              elementoFinal: false,
                        },
                        {
                              name: 'Martes',
                              entrada: {
                                    content: '15/07/2025 08:15',
                                    status: 'tardanza',
                              },
                              salida: {
                                    content: '15/07/2025 17:30',
                                    status: 'asistio',
                              },
                              elementoFinal: false,
                        },
                        {
                              name: 'Miércoles',
                              entrada: {
                                    content: '16/07/2025 07:58',
                                    status: 'asistio',
                              },
                              salida: {
                                    content: ' - ',
                                    status: 'falto',
                              },
                              elementoFinal: false,
                        },
                        {
                              name: 'Jueves',
                              entrada: {
                                    content: '',
                                    status: '',
                              },
                              salida: {
                                    content: '',
                                    status: '',
                              },
                              elementoFinal: false,
                        },
                        {
                              name: 'Viernes',
                              entrada: {
                                    content: '18/07/2025',
                                    status: '',
                              },
                              salida: {
                                    content: '18/07/2025',
                                    status: '',
                              },
                              elementoFinal: true,
                        },
                  ],
            },
            {
                  name: 'semana pasada',
                  dias: [
                        {
                              name: 'Lunes',
                              entrada: {
                                    content: '07/07/2025 08:05',
                                    status: 'asistio',
                              },
                              salida: {
                                    content: '07/07/2025 17:30',
                                    status: 'asistio',
                              },
                              elementoFinal: false,
                        },
                        {
                              name: 'Martes',
                              entrada: {
                                    content: ' - ',
                                    status: 'falto',
                              },
                              salida: {
                                    content: ' - ',
                                    status: 'falto',
                              },
                              elementoFinal: false,
                        },
                        {
                              name: 'Miércoles',
                              entrada: {
                                    content: '09/07/2025 08:00',
                                    status: 'asistio',
                              },
                              salida: {
                                    content: '09/07/2025 17:31',
                                    status: 'asistio',
                              },
                              elementoFinal: false,
                        },
                        {
                              name: 'Jueves',
                              entrada: {
                                    content: '10/07/2025 08:02',
                                    status: 'asistio',
                              },
                              salida: {
                                    content: '10/07/2025 17:29',
                                    status: 'asistio',
                              },
                              elementoFinal: false,
                        },
                        {
                              name: 'Viernes',
                              entrada: {
                                    content: '11/07/2025 08:20',
                                    status: 'tardanza',
                              },
                              salida: {
                                    content: '11/07/2025 17:30',
                                    status: 'asistio',
                              },
                              elementoFinal: true,
                        },
                  ],
            },
            {
                  name: 'semana antepasada',
                  dias: [
                        {
                              name: 'Lunes',
                              entrada: {
                                    content: '30/06/2025 07:59',
                                    status: 'asistio',
                              },
                              salida: {
                                    content: '30/06/2025 17:30',
                                    status: 'asistio',
                              },
                              elementoFinal: false,
                        },
                        {
                              name: 'Martes',
                              entrada: {
                                    content: '01/07/2025 08:00',
                                    status: 'asistio',
                              },
                              salida: {
                                    content: '01/07/2025 17:33',
                                    status: 'asistio',
                              },
                              elementoFinal: false,
                        },
                        {
                              name: 'Miércoles',
                              entrada: {
                                    content: '02/07/2025 08:01',
                                    status: 'asistio',
                              },
                              salida: {
                                    content: '02/07/2025 17:28',
                                    status: 'asistio',
                              },
                              elementoFinal: false,
                        },
                        {
                              name: 'Jueves',
                              entrada: {
                                    content: '03/07/2025 08:05',
                                    status: 'asistio',
                              },
                              salida: {
                                    content: '03/07/2025 17:30',
                                    status: 'asistio',
                              },
                              elementoFinal: false,
                        },
                        {
                              name: 'Viernes',
                              entrada: {
                                    content: '04/07/2025 07:55',
                                    status: 'asistio',
                              },
                              salida: {
                                    content: '04/07/2025 17:31',
                                    status: 'asistio',
                              },
                              elementoFinal: true,
                        },
                  ],
            },
            {
                  name: 'semana 10',
                  dias: [
                        {
                              name: 'Lunes',
                              entrada: {
                                    content: '23/06/2025 08:10',
                                    status: 'tardanza',
                              },
                              salida: {
                                    content: '23/06/2025 17:30',
                                    status: 'asistio',
                              },
                              elementoFinal: false,
                        },
                        {
                              name: 'Martes',
                              entrada: {
                                    content: '24/06/2025 08:00',
                                    status: 'asistio',
                              },
                              salida: {
                                    content: '24/06/2025 17:30',
                                    status: 'asistio',
                              },
                              elementoFinal: false,
                        },
                        {
                              name: 'Miércoles',
                              entrada: {
                                    content: '25/06/2025 07:58',
                                    status: 'asistio',
                              },
                              salida: {
                                    content: '25/06/2025 17:35',
                                    status: 'asistio',
                              },
                              elementoFinal: false,
                        },
                        {
                              name: 'Jueves',
                              entrada: {
                                    content: ' - ',
                                    status: 'falto',
                              },
                              salida: {
                                    content: ' - ',
                                    status: 'falto',
                              },
                              elementoFinal: false,
                        },
                        {
                              name: 'Viernes',
                              entrada: {
                                    content: '27/06/2025 08:00',
                                    status: 'asistio',
                              },
                              salida: {
                                    content: '27/06/2025 17:30',
                                    status: 'asistio',
                              },
                              elementoFinal: true,
                        },
                  ],
            },
      ]);
}

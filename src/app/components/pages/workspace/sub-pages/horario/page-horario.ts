import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TemplateHorario } from '../../../../shared/templates/workspace/horario/template-horario';
import { HorarioService } from '../../infrastructura/api/horario.service';
import { ParentService } from '../../infrastructura/api/parent.service';
import { TemporadaService } from '../../infrastructura/api/temporada.service';
import { catchError, of, switchMap } from 'rxjs';

@Component({
      selector: 'page-horario',
      imports: [TemplateHorario],
      template: `
            <!-- <template-horario
                  [studentsList]="childrenList()"
                  [temporadasList]="temporadasList()"
                  [daysHorario]="daysHorario()"
                  (changeChild)="studentDNI.set($event)"
                  (changeChildHorario)="
                        horarioParams.set({
                              year: $event.year,
                              dni: $event.dni,
                        })
                  "
            /> -->
            <template-horario />
      `,
})
export default class PageHorario {
      private parentService = inject(ParentService);
      private horarioService = inject(HorarioService);
      private temporadaService = inject(TemporadaService);

      protected dniParent = signal('99233923');
      protected studentDNI = signal('0');
      protected horarioParams = signal<{ year: string; dni: string } | null>(
            null,
      );

      // computed
      private rawChildren = toSignal(
            this.parentService.getStudent(this.dniParent()).pipe(
                  catchError((error) => {
                        console.error(
                              'Error al obtener la lista de hijos:',
                              error,
                        );
                        return of([]); // Devuelve un arreglo vacío en caso de error
                  }),
            ),
            { initialValue: [] },
      );

      protected childrenList = computed(() =>
            this.rawChildren().map((s) => ({
                  id: s.dni,
                  value: `${s.name} ${s.surnamePaternal} ${s.surnameMaternal}`,
            })),
      );

      protected temporadasList = toSignal(
            computed(() => {
                  const dni = this.studentDNI();
                  if (dni === '0') return of([]); // Si no hay DNI, no busques nada
                  return this.temporadaService.findAllSeasonByStudent(dni);
            })().pipe(
                  catchError((error) => {
                        console.error(
                              'Error al obtener las temporadas:',
                              error,
                        );
                        return of([]); // Devuelve un arreglo vacío como valor por defecto
                  }),
                  switchMap((seasons) =>
                        of(seasons.map((t) => ({ id: t.year, value: t.year }))),
                  ),
            ),
            { initialValue: [] },
      );

      protected daysHorario = toSignal(
            computed(() => {
                  const params = this.horarioParams();
                  if (!params || params.year === '0') return of([]); // Si no hay params, no busques
                  return this.horarioService.obtenerHorarioPorTemporada(
                        params.year,
                        params.dni,
                  );
            })().pipe(
                  catchError((error) => {
                        console.error('Error al obtener el horario:', error);
                        return of([]); // Devuelve un arreglo vacío para mantener la UI estable
                  }),
                  switchMap((horario) => of(horario)),
            ),
            { initialValue: [] },
      );
}

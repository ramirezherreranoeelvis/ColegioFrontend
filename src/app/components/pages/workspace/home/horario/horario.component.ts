import { Component, Renderer2 } from '@angular/core';
import { ParentService } from '../../parent.service';
import { HorarioService } from './horario.service';
import { FormsModule } from '@angular/forms';
import { TemporadaService } from '../../temporada.service';
import { firstValueFrom } from 'rxjs';
import { TableHorarioComponent } from '../../../../shared/atoms/table-horario/table-horario.component';
import { DayHorario } from '../../../../../infrastructure/interfaces/horario/dayHorario';
import List from '../../../../shared/atoms/select-list/list';
import { SelectListComponent } from '../../../../shared/atoms/select-list/select-list.component';
import { TextGradientComponent } from '../../../../shared/atoms/text-gradient/text-gradient.component';

@Component({
      selector: 'app-horario',
      standalone: true,
      imports: [
            FormsModule,
            SelectListComponent,
            TableHorarioComponent,
            TextGradientComponent,
      ],
      templateUrl: './horario.component.html',
      styleUrl: './horario.component.scss',
})
export class HorarioComponent {
      protected dniParent: string = '99233923';
      protected studentSelectDNI: string = '0';
      protected studentsList!: List[];
      protected temporadasList!: List[];
      protected horarioView: boolean = false;
      protected daysHorario!: DayHorario[];

      constructor(
            private renderer: Renderer2,
            private parentService: ParentService,
            private horarioService: HorarioService,
            private temporadaService: TemporadaService,
      ) {}

      public ngOnInit(): void {
            this.getChildrens();
      }

      protected async getChildrens() {
            try {
                  const students = await firstValueFrom(
                        this.parentService.getStudent(this.dniParent),
                  );
                  this.studentsList = students.map((s) => {
                        return {
                              id: s.dni,
                              value:
                                    s.name +
                                    ' ' +
                                    s.surnamePaternal +
                                    ' ' +
                                    s.surnameMaternal,
                        };
                  });
            } catch (error) {
                  console.error('Error fetching students', error);
            }
      }

      protected async updateDataStudentSelect(dni: string) {
            //si no se escojio ninguno los datos se borran
            this.studentSelectDNI = dni;
            if (dni == '0') {
                  return;
            }
            try {
                  const temporadas = await firstValueFrom(
                        this.temporadaService.findAllSeasonByStudent(dni),
                  );
                  this.temporadasList = temporadas.map((t) => {
                        return { id: t.year, value: t.year };
                  });
            } catch (error) {
                  console.error('Error fetching temporadas', error);
            }
      }

      protected async updateHorario(year: string) {
            if (year == '0') {
                  this.daysHorario = [];
                  this.horarioView = false;
                  return;
            }
            this.horarioView = true;
            try {
                  const daysHorario = await firstValueFrom(
                        this.horarioService.obtenerHorarioPorTemporada(
                              year,
                              this.studentSelectDNI,
                        ),
                  );
                  this.daysHorario = daysHorario;
            } catch (error) {
                  console.error('Error fetching daysHorario', error);
            }
      }
      protected donwloadHorario(): void {}
}

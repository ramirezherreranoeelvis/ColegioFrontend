import { Component, OnInit, Renderer2 } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { HorarioService } from '../../../../pages/workspace/infrastructura/api/horario.service';
import { ParentService } from '../../../../pages/workspace/infrastructura/api/parent.service';
import { TemporadaService } from '../../../../pages/workspace/infrastructura/api/temporada.service';
import { DayHorario } from '../../../../pages/workspace/infrastructura/interfaces/horario/dayHorario';
import List from '../../../atoms/select-list/list';
import { FormsModule } from '@angular/forms';
import { SelectListComponent } from '../../../atoms/select-list/select-list.component';
import { TableHorarioComponent } from '../../../organisms/tables/table-horario/table-horario.component';
import { TextGradientComponent } from '../../../atoms/text-gradient/text-gradient.component';

@Component({
      selector: 'template-horario',
      imports: [
            FormsModule,
            SelectListComponent,
            TableHorarioComponent,
            TextGradientComponent,
      ],
      templateUrl: './template-horario.component.html',
      styleUrl: './template-horario.scss',
})
export class TemplateHorario implements OnInit {
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

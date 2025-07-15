import { Component, OnInit } from '@angular/core';
import { SelectListComponent } from '../../../atoms/select-list/select-list.component';
import { firstValueFrom } from 'rxjs';
import { NotasService } from '../../../../pages/workspace/infrastructura/api/notas.service';
import { TemporadaService } from '../../../../pages/workspace/infrastructura/api/temporada.service';
import { Promedios } from '../../../../pages/workspace/infrastructura/interfaces/notas/promedios';
import List from '../../../atoms/select-list/list';
import { FormsModule } from '@angular/forms';
import { AtomLabel } from '../../../atoms/label/label';

@Component({
      selector: 'template-notas-generales',
      imports: [FormsModule, SelectListComponent, AtomLabel],
      templateUrl: './template-notas-generales.component.html',
      styleUrl: './template-notas-generales.scss',
})
export class TemplateNotasGenerales implements OnInit {
      protected temporadasList: List[] = [];
      protected dniStudent = '21787088';
      protected cursoNotas: Promedios | null = null;

      constructor(
            private temporadaService: TemporadaService,
            private notasService: NotasService,
      ) {}

      public ngOnInit(): void {
            this.getTemporadas();
      }
      protected async getTemporadas() {
            try {
                  const temporadas = await firstValueFrom(
                        this.temporadaService.findAllSeasonByStudent(
                              this.dniStudent,
                        ),
                  );
                  this.temporadasList = temporadas.map((t) => {
                        return { id: t.year, value: t.year } as List;
                  });
            } catch (error) {
                  console.error(error);
            }
      }

      protected async updateDataCoursesSelect(year: string) {
            if (year == '0') {
                  this.cursoNotas = null;
                  return;
            }
            try {
                  this.cursoNotas = await firstValueFrom(
                        this.notasService.obtenerPromediosGenerales(
                              this.dniStudent,
                              year,
                        ),
                  );
            } catch (error) {
                  console.error(error);
            }
      }
}

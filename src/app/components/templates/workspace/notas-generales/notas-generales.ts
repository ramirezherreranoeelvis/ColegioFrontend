import { Component } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { NotasService } from '../../../../infraestructure/pages/workspace/pages/notas-generales/infrastructura/api/notas.service';
import { TemporadaService } from '../../../../infraestructure/pages/workspace/infrastructura/api/temporada.service';
import { Promedios } from '../../../../infraestructure/pages/workspace/pages/notas-generales/infrastructura/interfaces/promedios';
import List from '../../../atoms/select/list';
import { FormsModule } from '@angular/forms';
import { AtomSelect } from '../../../atoms/select/select';
import { AtomText } from '../../../atoms/text/text';
import { TableNotas } from '../../../organims/tables/notas/notas';

@Component({
      selector: 'template-notas-generales',
      imports: [FormsModule, AtomSelect, AtomText, TableNotas],
      templateUrl: './notas-generales.component.html',
      styleUrl: './notas-generales.scss',
})
export class TemplateNotasGenerales {
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
                        this.temporadaService.findAllSeasonByStudent(this.dniStudent),
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
                        this.notasService.obtenerPromediosGenerales(this.dniStudent, year),
                  );
            } catch (error) {
                  console.error(error);
            }
      }
}

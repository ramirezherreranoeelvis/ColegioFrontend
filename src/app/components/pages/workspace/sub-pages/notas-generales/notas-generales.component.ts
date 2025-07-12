import { Component, OnInit } from '@angular/core';
import { TemporadaService } from '../../infrastructure/api/temporada.service';
import { FormsModule } from '@angular/forms';
import { NotasService } from '../../infrastructure/api/notas.service';
import { firstValueFrom } from 'rxjs';
import { Promedios } from '../../infrastructure/interfaces/notas/promedios';
import List from '../../../../shared/atoms/select-list/list';
import { SelectListComponent } from '../../../../shared/atoms/select-list/select-list.component';
import { TextGradientComponent } from '../../../../shared/atoms/text-gradient/text-gradient.component';

@Component({
      selector: 'app-notas-generales',
      standalone: true,
      imports: [FormsModule, SelectListComponent, TextGradientComponent],
      templateUrl: './notas-generales.component.html',
      styleUrl: './notas-generales.component.scss',
})
export default class NotasGeneralesComponent implements OnInit {
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

import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { HistorialService } from '../../../../pages/workspace/infrastructura/api/historial.service';
import { SemanaHistorial } from '../../../../pages/workspace/infrastructura/interfaces/semanaHistorial';
import { SelectListComponent } from '../../../atoms/select-list/select-list.component';
import { TableAttendanceHistoryComponent } from '../../../organisms/tables/table-attendance-history/table-attendance-history.component';
import { AtomLabel } from '../../../atoms/label/label';

@Component({
      selector: 'template-historial',
      imports: [
            SelectListComponent,
            TableAttendanceHistoryComponent,
            AtomLabel,
      ],
      templateUrl: './template-historial.component.html',
      styleUrl: './template-historial.scss',
})
export class TemplateHistorial implements OnInit {
      constructor(private historialService: HistorialService) {}
      ngOnInit(): void {
            this.getTemporadas();
      }
      async getTemporadas() {
            try {
                  this.historial = await firstValueFrom(
                        this.historialService.obtenerTemporadas('21787088'),
                  );
            } catch (error) {
                  console.error(error);
            }
      }
      ndias = 5;
      historial!: SemanaHistorial[];
}

import { Component, OnInit } from '@angular/core';
import { HistorialService } from './historial.service';
import { firstValueFrom } from 'rxjs';
import { SemanaHistorial } from '../../../../../infrastructure/interfaces/semanaHistorial';
import { SelectListComponent } from '../../../../shared/atoms/select-list/select-list.component';
import { TableAttendanceHistoryComponent } from '../../../../shared/atoms/table-attendance-history/table-attendance-history.component';
import { TextGradientComponent } from '../../../../shared/atoms/text-gradient/text-gradient.component';

@Component({
      selector: 'app-historial',
      standalone: true,
      imports: [
            TableAttendanceHistoryComponent,
            SelectListComponent,
            TextGradientComponent,
      ],
      templateUrl: './historial.component.html',
      styleUrl: './historial.component.scss',
})
export class HistorialComponent implements OnInit {
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

import { Component, OnInit } from '@angular/core';
import { IncidentesService } from '../../infrastructure/api/incidentes.service';
import { FormsModule } from '@angular/forms';
import { ParentService } from '../../infrastructure/api/parent.service';
import { firstValueFrom } from 'rxjs';
import List from '../../../../shared/atoms/select-list/list';
import { SelectListComponent } from '../../../../shared/atoms/select-list/select-list.component';
import { TextGradientComponent } from '../../../../shared/atoms/text-gradient/text-gradient.component';
import { Report } from '../../infrastructure/interfaces/report';
@Component({
      selector: 'app-reportes-incidentes',
      standalone: true,
      imports: [FormsModule, SelectListComponent, TextGradientComponent],
      templateUrl: './reportes-incidentes.component.html',
      styleUrl: './reportes-incidentes.component.scss',
})
export default class ReportesIncidentesComponent implements OnInit {
      protected dniParent: string = '99233923';
      protected studentSelectDNI: string = '0';
      protected studentsList: List[] = [];
      protected reportes: Report[] = [];

      constructor(
            private incidentesService: IncidentesService,
            private parentService: ParentService,
      ) {}

      public ngOnInit(): void {
            this.getStudents();
      }

      async getStudents() {
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

      async updateDataStudentSelect(dni: string) {
            //si no se escojio ninguno los datos se borran
            this.studentSelectDNI = dni;
            if (dni == '0') {
                  return;
            }
            try {
                  this.reportes = await firstValueFrom(
                        this.incidentesService.obtenerIncidentes(dni),
                  );
            } catch (error) {
                  console.error('Error fetching reports', error);
            }
      }
}

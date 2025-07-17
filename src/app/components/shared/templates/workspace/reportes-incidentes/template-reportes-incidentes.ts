import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { IncidentesService } from '../../../../pages/workspace/infrastructura/api/incidentes.service';
import { ParentService } from '../../../../pages/workspace/infrastructura/api/parent.service';
import List from '../../../atoms/select/list';
import { AtomSelect } from '../../../atoms/select/select';
import { Report } from '../../../../pages/workspace/infrastructura/interfaces/report';
import { AtomLabel } from '../../../atoms/label/label';

@Component({
      selector: 'template-reportes-incidentes',
      imports: [AtomSelect, AtomLabel],
      templateUrl: './template-reportes-incidentes.component.html',
      styleUrl: './template-reportes-incidentes.scss',
})
export class TemplateReportesIncidentes implements OnInit {
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

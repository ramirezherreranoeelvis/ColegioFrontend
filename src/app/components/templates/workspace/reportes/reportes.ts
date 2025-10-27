import { Component } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { IncidentesService } from '../../../../infraestructure/pages/workspace/pages/reportes/infrastructura/api/incidentes.service';
import { ParentService } from '../../../../infraestructure/pages/workspace/infrastructura/api/parent.service';
import List from '../../../atoms/select/list';
import { AtomText } from '../../../atoms/text/text';
import { AtomSelect } from '../../../atoms/select/select';
import { Report } from '../../../../infraestructure/pages/workspace/pages/reportes/infrastructura/interfaces/report';
import { TableReports } from '../../../organims/tables/reports/reports';

@Component({
      selector: 'template-reportes',
      imports: [AtomText, AtomSelect, TableReports],
      templateUrl: './reportes.component.html',
})
export class TemplateReportes {
      protected dniParent: string = '99233923';
      protected studentSelectDNI: string = '10';
      protected studentsList: List[] = [];
      protected reportes: Report[] = [
            {
                  date: '2023-10-10',
                  description:
                        'El estudiante tuvo un comportamiento ejemplar durante toda la semana.',
                  assistant: 'Juan Perez',
                  phoneNumberAssistant: '987654321',
            },
            {
                  date: '2023-10-15',
                  description: 'El estudiante participó activamente en clase.',
                  assistant: 'Maria Lopez',
                  phoneNumberAssistant: '912345678',
            },
            {
                  date: '2023-10-20',
                  description: 'El estudiante mostró mejoras significativas en sus tareas.',
                  assistant: 'Carlos Sanchez',
                  phoneNumberAssistant: '923456789',
            },
      ];

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
                              value: s.name + ' ' + s.surnamePaternal + ' ' + s.surnameMaternal,
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

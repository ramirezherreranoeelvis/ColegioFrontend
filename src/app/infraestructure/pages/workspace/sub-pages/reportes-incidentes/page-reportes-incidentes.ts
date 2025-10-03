import { Component, inject } from '@angular/core';
import { TemplateReportes } from '../../../../../components/templates/workspace/reportes/reportes';
import { IncidentesService } from '../../infrastructura/api/incidentes.service';
import { ParentService } from '../../infrastructura/api/parent.service';
import List from '../../../../../components/atoms/select/list';
import { firstValueFrom } from 'rxjs';
import { Report } from '../../infrastructura/interfaces/report';

@Component({
      selector: 'page-reportes-incidentes',
      imports: [TemplateReportes],
      template: `<template-reportes />`,
})
export default class PageReportesIncidentes {
      private incidentesService = inject(IncidentesService);
      private parentService = inject(ParentService);

      protected dniParent: string = '99233923';
      protected studentSelectDNI: string = '0';
      protected studentsList: List[] = [];
      protected reportes: Report[] = [];

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

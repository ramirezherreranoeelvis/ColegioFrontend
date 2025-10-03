import { Component, computed, inject, signal } from '@angular/core';
import { HistorialIngresoApi } from './infrastruture/api/historial.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
import { TemplateHistorial } from '../../../../../components/templates/workspace/historial/historial';

@Component({
      selector: 'page-historial',
      imports: [TemplateHistorial],
      template: `<template-historial />`,
})
export default class PageHistorial {
      private historialService = inject(HistorialIngresoApi);
      protected studentDNI = signal('21787088');

      protected historial = toSignal(
            computed(() => {
                  const dni = this.studentDNI();
                  if (dni === '0') return of([]); // Si no hay DNI, no busques nada
                  return this.historialService.obtenerTemporadas(dni);
            })().pipe(
                  catchError((error) => {
                        console.error('Error al obtener las temporadas:', error);
                        return of([]); // Devuelve un arreglo vacío como valor por defecto
                  })
            ),
            { initialValue: [] }
      );
}

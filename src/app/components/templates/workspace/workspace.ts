import { Component, computed, input } from '@angular/core';
import List from '../../atoms/select/list';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TRolUsers } from '../../../core/types/TRolUsers';
import { NavButtonsComponent } from '../../molecules/nav-buttons/nav-buttons';
import { CardPerfil } from '../../molecules/cards/perfil/perfil';
import { Panel } from '../../wrappers/panel/panel';

/**
 * Reusable TemplateWorkspace
 *
 * @param {Token} rolUser            - rolUser for navs enableds.
 *
 */
@Component({
      selector: 'template-workspace',
      imports: [CommonModule, CardPerfil, RouterOutlet, NavButtonsComponent, Panel],
      templateUrl: './workspace.html',
})
export class TemplateWorkspace {
      rolUser = input<TRolUsers>('FATHER');
      private readonly routesMain: List[] = [
            { id: '/horario', value: 'horario' },
            // { id: '/reportes', value: 'incidentes' },
            { id: '/cursos', value: 'cursos' },
            // { id: '/historial', value: 'historial de ingreso' },
            { id: '/notas-generales', value: 'Notas Generales' },
      ];
      private readonly routesPagos: List[] = [
            {
                  id: '/registrar-matricula',
                  value: 'registrar matricula',
            },
            {
                  id: '/pago-matricula',
                  value: 'pago matricula',
            },
            {
                  id: '/pago-mensual',
                  value: 'pago mensualidad',
            },
      ];
      private readonly routesPagosTeacher: List[] = [
            {
                  id: '/teacher/payment-history',
                  value: 'Mi Historial de Pagos',
            },
      ];

      protected finalRoutesMain = computed(() => {
            if (this.rolUser() === '') {
                  return [];
            }
            return this.routesMain;
      });

      protected finalRoutesPagos = computed(() => {
            const currentRol = this.rolUser();

            switch (currentRol) {
                  // Padres, Representantes y roles Admin tienen acceso a todo.
                  case 'FATHER':
                  case 'MOTHER':
                  case 'REPRESENTATIVE':
                  case 'ASSISTANT':
                  case 'DIRECTOR':
                        return this.routesPagos;

                  // El profesor ve su propia sección de pagos.
                  case 'TEACHER':
                        return this.routesPagosTeacher;

                  // El estudiante y el rol vacío no ven ninguna ruta de pagos.
                  case 'STUDENT':
                  case '':
                  default:
                        return [];
            }
      });
}

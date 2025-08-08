import { Component, computed, input } from '@angular/core';
import List from '../../atoms/select/list';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavButtonsComponent } from '../../molecules/nav-buttons/nav-buttons';
import { PerfilComponent } from '../../molecules/perfil/perfil.component';
import { TRolUsers } from '../../../../core/types/TRolUsers';

/**
 * Reusable TemplateWorkspace
 *
 * @param {Token} rolUser            - rolUser for navs enableds.
 *
 */
@Component({
      selector: 'template-workspace',
      imports: [
            CommonModule,
            PerfilComponent,
            RouterOutlet,
            NavButtonsComponent,
      ],
      templateUrl: './template-workspace.html',
})
export class TemplateWorkspace {
      rolUser = input<TRolUsers>('');
      private readonly routesMain: List[] = [
            { id: '/workspace/horario', value: 'horario' },
            { id: '/workspace/reportes-incidentes', value: 'incidentes' },
            { id: '/workspace/cursos', value: 'cursos' },
            { id: '/workspace/historial', value: 'historial de ingreso' },
            { id: '/workspace/notas-generales', value: 'Notas Generales' },
      ];
      private readonly routesPagos: List[] = [
            {
                  id: '/workspace/registrar-matricula',
                  value: 'registrar matricula',
            },
            {
                  id: '/workspace/registrar-pago-matricula',
                  value: 'pago matricula',
            },
            {
                  id: '/workspace/registrar-pago-mensual',
                  value: 'pago mensualidad',
            },
      ];
      private readonly routesPagosTeacher: List[] = [
            {
                  id: '/workspace/teacher/payment-history',
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

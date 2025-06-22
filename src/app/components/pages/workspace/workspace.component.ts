import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import List from '../../shared/atoms/select-list/list';
import { NavButtonsComponent } from '../../shared/molecules/nav-buttons/nav-buttons.component';
import { PerfilComponent } from '../../shared/molecules/perfil/perfil.component';

@Component({
      selector: 'app-home',
      standalone: true,
      imports: [
            CommonModule,
            PerfilComponent,
            RouterOutlet,
            NavButtonsComponent,
      ],
      templateUrl: './workspace.component.html',
      styleUrl: './workspace.component.scss',
})
export default class WorkspacePage {
      routesMain: List[] = [
            { id: '/workspace/horario', value: 'horario' },
            { id: '/workspace/reportes-incidentes', value: 'incidentes' },
            { id: '/workspace/cursos', value: 'cursos' },
            { id: '/workspace/historial', value: 'historial de ingreso' },
            { id: '/workspace/notas-generales', value: 'Notas Generales' },
      ];
      routesMatricula: List[] = [
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
      routesTeacher: List[] = [
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
}

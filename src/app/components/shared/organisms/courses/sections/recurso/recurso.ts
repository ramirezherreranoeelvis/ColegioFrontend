import { Component, input } from '@angular/core';
import { RecursoContenidoCurso } from "../../../../../pages/workspace/sub-pages/cursos/infrastructure/interfaces/resource-content";

@Component({
      selector: 'section-recurso',
      templateUrl: './recurso.component.html',
      styleUrl: './recurso.scss',
})
export class SectionRecurso {
      rolUserResource = input('');
      resource = input.required<RecursoContenidoCurso>();
}

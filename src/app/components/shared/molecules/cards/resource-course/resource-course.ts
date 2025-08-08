import { Component, computed, input } from '@angular/core';
import { RecursoContenidoCurso } from '../../../../pages/workspace/sub-pages/cursos/infrastructure/interfaces/resource-content';

@Component({
      selector: 'resource-course',
      templateUrl: './resource-course.component.html',
})
export class ResourceCourseComponent {
      resource = input.required<RecursoContenidoCurso>();
      
      protected singleGrade = computed(() => {
            const notas = this.resource().notas;

            // Verifica si 'notas' existe y NO es un arreglo
            if (notas && !Array.isArray(notas)) {
                  return notas.nota;
            }

            return null; // En cualquier otro caso, no hay nota individual
      });
}

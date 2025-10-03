import { Component, computed, input } from '@angular/core';
import { RecursoContenidoCurso } from '../../../../infraestructure/pages/workspace/sub-pages/cursos/infrastructure/interfaces/resource-content';

@Component({
      selector: 'card-resource-course',
      templateUrl: './resource-course.component.html',
})
export class CardResourceCourse {
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

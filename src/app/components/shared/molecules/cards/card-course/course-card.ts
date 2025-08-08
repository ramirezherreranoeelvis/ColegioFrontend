import { Component, computed, input } from '@angular/core';
import { AtomText } from '../../../atoms/text/text';

@Component({
      selector: 'card-course',
      templateUrl: './course-card.component.html',
      imports: [AtomText],
})
export class CardCourse {
      code = input('');
      portada = input('');
      name = input('');
      profesores = input<string[]>(['']);

      textProfesores = computed(() =>
            this.profesores()
                  .map((profesor, index) => profesor)
                  .join(', '),
      );
}

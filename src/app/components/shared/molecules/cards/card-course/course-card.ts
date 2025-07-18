import { Component, input } from '@angular/core';

@Component({
      selector: 'card-course',
      templateUrl: './course-card.component.html',
})
export class CardCourse {
      code = input('');
      portada = input('');
      name = input('');
      profesores = input<string[]>(['']);
}

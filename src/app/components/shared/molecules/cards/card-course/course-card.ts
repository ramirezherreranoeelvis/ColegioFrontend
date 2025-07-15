import { Component, input, output } from '@angular/core';

@Component({
      selector: 'card-course',
      templateUrl: './course-card.component.html',
})
export class CardCourse {
      code = input('');
      portada = input('');
      name = input('');
      profesores = input<string[]>(['']);
      eventClick = output<{
            contenido: string;
            codigo: string;
      }>();
      handleClick() {
            this.eventClick.emit({
                  contenido: 'curso',
                  codigo: this.code(),
            });
      }
}

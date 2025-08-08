import { Component, computed, input } from '@angular/core';
import { AtomText } from '../../../atoms/text/text';
import { NgOptimizedImage } from '@angular/common';

@Component({
      selector: 'card-course',
      templateUrl: './course-card.component.html',
      imports: [AtomText, NgOptimizedImage],
})
export class CardCourse {
      code = input('');
      portada = input('');
      name = input('');
      profesores = input<string[]>([]);

      textProfesores = computed(() => this.profesores().join(', '));
}

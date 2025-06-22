import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
      selector: 'course-card',
      standalone: true,
      imports: [],
      templateUrl: './course-card.component.html',
      styleUrl: './course-card.component.scss',
})
export class CourseCardComponent {
      @Input() code!: string;
      @Input() portada!: string;
      @Input() name!: string;
      @Input() profesores!: string[];
      @Output() selectedCourse = new EventEmitter<{
            contenido: string;
            codigo: string;
      }>();

      handleClick() {
            this.selectedCourse.emit();
      }
}

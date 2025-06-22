import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { CourseSectionCardComponent } from '../../molecules/course-section-card/course-section-card.component';
import { LineSeparatorComponent } from '../../atoms/line-separator/line-separator.component';
import { TextGradientComponent } from '../../atoms/text-gradient/text-gradient.component';
import { Curso } from '../../../../infrastructure/interfaces/cursos/curso';

@Component({
      selector: 'course-content',
      standalone: true,
      imports: [
            CourseSectionCardComponent,
            LineSeparatorComponent,
            TextGradientComponent,
      ],
      templateUrl: './course-content.component.html',
      styleUrl: './course-content.component.scss',
})
export class CourseContentComponent {
      course = input.required<Curso>();
      rol = input<string>('');
      @Output() selectedResource = new EventEmitter<{
            contenido: string;
            codigo: string;
      }>();

      handleClick(event: { contenido: string; codigo: string | any }) {
            this.selectedResource.emit(event);
      }
}

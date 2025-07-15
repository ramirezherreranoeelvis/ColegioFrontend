import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { CourseSectionCardComponent } from '../../molecules/cards/course-section-card/course-section-card';
import { AtomLineSeparator } from '../../atoms/line-separator/line-separator';
import { Curso } from '../../../pages/workspace/infrastructura/interfaces/cursos/curso';
import { AtomLabel } from '../../atoms/label/label';

@Component({
      selector: 'course-content',
      imports: [CourseSectionCardComponent, AtomLineSeparator, AtomLabel],
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

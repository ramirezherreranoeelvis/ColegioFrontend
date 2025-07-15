import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ResourceCourseComponent } from '../resource-course/resource-course';
import { AtomLineSeparator } from '../../../atoms/line-separator/line-separator';
import { ContenidoCurso } from '../../../../pages/workspace/infrastructura/interfaces/cursos/curso';

@Component({
      selector: 'course-section-card',
      imports: [ResourceCourseComponent, AtomLineSeparator],
      templateUrl: './course-section-card.component.html',
      styleUrl: './course-section-card.scss',
})
export class CourseSectionCardComponent {
      @Input() content!: ContenidoCurso;
      @Output() selectedContent = new EventEmitter<{
            contenido: string;
            codigo: string;
      }>();

      handleClick(contenido: string, codigo: string | any) {
            this.selectedContent.emit({ contenido, codigo });
      }
}

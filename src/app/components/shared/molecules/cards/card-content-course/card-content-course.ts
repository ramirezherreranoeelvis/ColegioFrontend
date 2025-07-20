import { Component, input } from '@angular/core';
import { ResourceCourseComponent } from '../resource-course/resource-course';
import { AtomLineSeparator } from '../../../atoms/line-separator/line-separator';
import { ContenidoCurso } from '../../../../pages/workspace/sub-pages/cursos/infrastructure/interfaces/course';
import { AtomLink } from '../../../atoms/link/link';
import { IconBook } from '../../../icons/book/icon-book';

@Component({
      selector: 'card-content-course',
      imports: [ResourceCourseComponent, AtomLineSeparator, AtomLink, IconBook],
      templateUrl: './card-content-course.component.html',
      styleUrl: './card-content-course.scss',
})
export class CardContentCourse {
      content = input.required<ContenidoCurso>();
}

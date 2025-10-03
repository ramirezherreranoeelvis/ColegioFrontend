import { Component, input } from '@angular/core';
import { CardResourceCourse } from '../resource-course/resource-course';
import { AtomLineSeparator } from '../../../atoms/line-separator/line-separator';
import { AtomLink } from '../../../atoms/link/link';
import { IconBook } from '../../../icons/book/icon-book';
import { ContenidoCurso } from '../../../../infraestructure/pages/workspace/sub-pages/cursos/infrastructure/interfaces/course';

@Component({
      selector: 'card-content-course',
      imports: [CardResourceCourse, AtomLineSeparator, AtomLink, IconBook],
      templateUrl: './content-course.component.html',
      styleUrl: './content-course.scss',
})
export class CardContentCourse {
      content = input.required<ContenidoCurso>();
}

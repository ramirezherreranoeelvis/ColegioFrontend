import { Component, input } from '@angular/core';
import { TemplateCourse } from '../../../../../shared/templates/workspace/courses/course/template-course';

@Component({
      selector: 'page-course',
      imports: [TemplateCourse],
      template: ` <template-course /> `,
})
export default class PageCourse {
      code = input('');
}

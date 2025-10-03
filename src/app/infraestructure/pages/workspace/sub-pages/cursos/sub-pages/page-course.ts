import { Component, input } from '@angular/core';
import { TemplateCourse } from '../../../../../../components/templates/workspace/courses/course/course';

@Component({
      selector: 'page-course',
      imports: [TemplateCourse],
      template: ` <template-course /> `,
})
export default class PageCourse {
      code = input('');
}

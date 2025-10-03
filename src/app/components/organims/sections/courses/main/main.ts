import { Component, input } from '@angular/core';
import { Curso } from '../../../../../infraestructure/pages/workspace/sub-pages/cursos/infrastructure/interfaces/course';
import { AtomLink } from "../../../../atoms/link/link";
import { CardCourse } from "../../../../molecules/cards/course/course";
import { AtomText } from "../../../../atoms/text/text";

@Component({
      selector: 'main-courses',
      templateUrl: 'main.component.html',
      imports: [AtomLink, CardCourse, AtomText],
})
export class MainCourses {
      courses = input<Curso[]>();
}

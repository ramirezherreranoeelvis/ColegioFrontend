import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecursoContenidoCurso } from "../../../../pages/workspace/sub-pages/cursos/infrastructure/interfaces/resource-content";

@Component({
      selector: 'resource-course',
      templateUrl: './resource-course.component.html',
      styleUrl: './resource-course.scss',
})
export class ResourceCourseComponent {
      @Input() resource!: RecursoContenidoCurso;
      @Output() selectedContent = new EventEmitter<void>();
      handleClick() {
            this.selectedContent.emit();
      }
}

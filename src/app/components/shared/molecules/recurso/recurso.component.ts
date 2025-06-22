import { Component, Input, OnInit } from '@angular/core';
import { RecursoContenidoCurso } from '../../../../infrastructure/interfaces/cursos/curso';

@Component({
      selector: 'recurso',
      standalone: true,
      imports: [],
      templateUrl: './recurso.component.html',
      styleUrl: './recurso.component.scss',
})
export class RecursoComponent implements OnInit {
      @Input() recurso!: RecursoContenidoCurso;

      ngOnInit(): void {}
}

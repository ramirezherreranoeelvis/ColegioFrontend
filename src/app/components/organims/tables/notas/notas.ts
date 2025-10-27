import { Component, input } from '@angular/core';
import { Promedios } from '../../../../infraestructure/pages/workspace/pages/notas-generales/infrastructura/interfaces/promedios';

@Component({
      selector: 'table-notas',
      templateUrl: 'notas.component.html',
})
export class TableNotas {
      cursoNotas = input<Promedios | null>(null);
}

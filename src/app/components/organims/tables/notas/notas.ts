import { Component, input } from '@angular/core';
import { Promedios } from '../../../../infraestructure/pages/workspace/infrastructura/interfaces/notas/promedios';

@Component({
      selector: 'table-notas',
      templateUrl: 'notas.component.html',
})
export class TableNotas {
      cursoNotas = input<Promedios | null>(null);
}

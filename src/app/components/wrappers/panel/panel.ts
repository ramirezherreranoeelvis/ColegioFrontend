import { Component } from '@angular/core';

@Component({
      selector: 'panel',
      template: `<ng-content />`,
      styleUrl: './panel.scss',
})
export class Panel {}

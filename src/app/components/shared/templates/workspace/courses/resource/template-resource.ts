import { Component } from '@angular/core';
import { AtomLabel } from '../../../../atoms/label/label';
import { MenuExitComponent } from '../../../../molecules/menu-exit/menu-exit.component';
import { AtomLink } from '../../../../atoms/link/link';

@Component({
      selector: 'template-resource',
      imports: [AtomLabel, MenuExitComponent, AtomLink],
      templateUrl: './template-resource.html',
      styleUrl: './template-resource.scss',
})
export class TemplateResource {}

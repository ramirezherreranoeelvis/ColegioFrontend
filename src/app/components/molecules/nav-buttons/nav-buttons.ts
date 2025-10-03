import { Component, Input } from '@angular/core';
import List from '../../atoms/select/list';
import { AtomLink } from '../../atoms/link/link';

@Component({
      selector: 'nav-buttons',
      imports: [AtomLink],
      templateUrl: './nav-buttons.component.html',
})
export class NavButtonsComponent {
      @Input() routes!: List[];
}

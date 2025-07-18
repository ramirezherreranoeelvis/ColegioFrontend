import { Component, output } from '@angular/core';

@Component({
      selector: 'menu-exit',
      standalone: true,
      imports: [],
      template: `
            <div class="exit" (click)="evtClick.emit()">
                  <div class="exit-content">
                        <div class="exit-line"></div>
                        <div class="exit-line"></div>
                  </div>
            </div>
      `,
      styleUrl: './menu-exit.component.scss',
})
export class MenuExitComponent {
      evtClick = output();
}

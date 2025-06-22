import { Component, EventEmitter, Output } from '@angular/core';

@Component({
      selector: 'menu-exit',
      standalone: true,
      imports: [],
      template: `
            <div class="exit" (click)="handleClick()">
                  <div class="exit-content">
                        <div class="exit-line"></div>
                        <div class="exit-line"></div>
                  </div>
            </div>
      `,
      styleUrl: './menu-exit.component.scss',
})
export class MenuExitComponent {
      @Output() exit = new EventEmitter<void>();
      handleClick() {
            this.exit.emit();
      }
}

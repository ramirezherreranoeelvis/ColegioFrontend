import { Component } from '@angular/core';

@Component({
      selector: 'line-separator',
      standalone: true,
      imports: [],
      template: `
            <div class="line-separation">
                  <div></div>
            </div>
      `,
      styleUrl: './line-separator.component.scss',
})
export class LineSeparatorComponent {}

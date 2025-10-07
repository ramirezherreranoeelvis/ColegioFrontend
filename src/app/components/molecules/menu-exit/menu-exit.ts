import { Component, computed, input, output } from '@angular/core';

@Component({
      selector: 'menu-exit',
      template: `
            <button
                  (click)="evtClick.emit()"
                  [style]="{
                        width: styleSize(),
                        height: styleSize(),
                  }"
                  [class]="className()"
            >
                  <div [style.width]="styleWidthLine()"></div>
                  <div [style.width]="styleWidthLine()"></div>
            </button>
      `,
      styleUrl: './menu-exit.scss',
})
export class MenuExitComponent {
      evtClick = output();
      className = input('p-[6px]');
      styleSize = input('37px');
      styleWidthLine = computed(() => {
            const size = this.styleSize();
            const hasNumericValue = /\d/.test(size);
            if (hasNumericValue) {
                  return `calc(${size} * 1.4142)`;
            }
            return '0px';
      });
}

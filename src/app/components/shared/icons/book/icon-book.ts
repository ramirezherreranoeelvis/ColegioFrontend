import { Component, input } from '@angular/core';

/**
 * Reusable IconBook component.
 *
 * @param {styleTheme}        styleTheme   Theme style of the button:
 *                                         - 'pink'
 *                                         - '' (default)
 * @param {string}            className    Additional Tailwind CSS classes.
 */
@Component({
      selector: 'icon-book',
      template: `
            <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  [class]="themeStyle() + ' ' + className()"
            >
                  <rect
                        x="10"
                        y="10"
                        width="44"
                        height="50"
                        rx="4"
                        ry="4"
                        class="cover"
                  />
                  <path d="M14 10v50h36V10H14z" class="page" />
                  <path d="M18 14h28v42H18z" class="inner-page" />
                  <rect x="14" y="10" width="4" height="50" class="spine" />
            </svg>
      `,
      styleUrl: `./icon-book.scss`,
})
export class IconBook {
      className = input('w-[40px] h-[40px] p-[5px_10px]');
      themeStyle = input<styleTheme>('');
}
export type styleTheme = 'pink' | '';

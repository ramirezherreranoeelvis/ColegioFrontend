import { Component, input } from '@angular/core';

/**
 * Reusable IconBook component.
 *
 * @param {styleTheme}        styleTheme   Theme style of the button:
 *                                         - 'green'
 *                                         - '' (default)
 * @param {string}            className    Additional Tailwind CSS classes.
 */
@Component({
      selector: 'icon-cactus',
      templateUrl: './icon-cactus.html',
      styleUrl: `./icon-cactus.scss`,
})
export class IconCactus {
      className = input('');
      themeStyle = input<styleTheme>('');
}
export type styleTheme = 'green' | '';

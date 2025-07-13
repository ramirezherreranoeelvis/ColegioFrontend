import { Component, input } from '@angular/core';
import { TFontStyle } from '../../../../core/types/TFontStyle';

/**
 * Reusable label component.
 *
 * @param {string} text            - Label text or content.
 *                                   If set, overrides any `<ng-content>`.
 *
 * @param {string} forId           - Used to link the label with an input via the `for` attribute.
 * @param {styleTheme} styleTheme  - Theme style of the container:
 *                                   - 'gradient-purple-fuxea-rose'
 *                                   - 'gradient-light-purple-fuxea-rose'
 *                                   - 'gradient-rose-purple'
 *                                   - 'gradient-red-darkblue-purple'
 *                                   - '' (default)
 *
 * @param {string} className       - Additional Tailwind CSS classes for styling.
 *
 * @param {FontStyle} fontStyle    - Font style:
 *                                   - 'normal' (default)
 *                                   - 'italic'
 *                                   - 'oblique'
 */
@Component({
      selector: 'atom-label',
      template: `
            <label
                  [for]="forId()"
                  [style.fontStyle]="fontStyle()"
                  [class]="themeStyle() + ' ' + className()"
            >
                  @if (text()) {
                        {{ text() }}
                  } @else {
                        <ng-content />
                  }
            </label>
      `,
      styleUrl: 'label.scss',
})
export class AtomLabel {
      text = input<string>('');
      forId = input<string>('');
      themeStyle = input<styleTheme>('');
      className = input<string>('');
      fontStyle = input<TFontStyle>('normal');
}
export type styleTheme =
      | 'gradient-purple-fuxea-rose'
      | 'gradient-light-purple-fuxea-rose'
      | 'gradient-rose-purple'
      | 'gradient-red-darkblue-purple'
      | '';

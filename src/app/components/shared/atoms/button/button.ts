import { Component, input, output } from '@angular/core';
import { TFontStyle } from '../../../../core/types/TFontStyle';

/**
 * Reusable button component.
 *
 * @param {string}            text         Text content inside the button. If set, overrides any <ng-content>.
 * @param {ButtonType}        type         Type of the HTML button:
 *                                         - 'button' (default)
 *                                         - 'submit'
 *                                         - 'reset'
 * @param {styleTheme}        styleTheme   Theme style of the button:
 *                                         - 'white-skyblue'
 *                                         - '' (default)
 * @param {string}            className    Additional Tailwind CSS classes.
 * @param {FontStyle}         fontStyle    Font style:
 *                                         - 'normal' (default)
 *                                         - 'italic'
 *                                         - 'oblique'
 * @param {EventEmitter<void>} evtClick    Event emitted when the button is clicked.
 */
@Component({
      selector: 'atom-button',
      template: `
            <button
                  [class]="themeStyle() + ' ' + className()"
                  [type]="type()"
                  [style.fontStyle]="fontStyle()"
                  (click)="evtClick.emit()"
            >
                  @if (text()) {
                        {{ text() }}
                  } @else {
                        <ng-content />
                  }
            </button>
      `,
      styleUrl: './button.scss',
})
export class AtomButton {
      text = input<string>('');
      type = input<ButtonType>('button');
      themeStyle = input<styleTheme>('');
      className = input<string>('');
      fontStyle = input<TFontStyle>('normal');

      evtClick = output();
}
export type ButtonType = 'button' | 'submit' | 'reset';
export type styleTheme = 'white-skyblue' | 'skyblue' | '';

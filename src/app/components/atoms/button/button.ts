import { Component, input, output } from '@angular/core';
import { TFontStyle } from '../../../core/types/TFontStyle';
import { NgTemplateOutlet } from '@angular/common';

/**
 * Reusable button component.
 *
 * @param {string}            text         Text content inside the button. If set, overrides any <ng-content>.
 * @param {TButton}        type         Type of the HTML button:
 *                                         - 'button' (default)
 *                                         - 'submit'
 *                                         - 'reset'
 * @param {TStyle}        styleTheme   Theme style of the button:
 *                                         - 'white-skyblue'
 *                                         - 'blue-purple'
 *                                         - 'purple'
 *                                         - 'indigo'
 *                                         - 'indigo-focus'
 *                                         - '' (default)
 * @param {TStyleFocus}       styleFocus   Additional Style Focus:
 *                                         - 'focus-indigo'
 *
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
                  [class]="styleTheme() + ' ' + className() + ' ' + styleFocus()"
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
      type = input<TButton>('button');
      styleTheme = input<TStyle>('');
      styleFocus = input<TStyleFocus>('');
      className = input<string>('');
      fontStyle = input<TFontStyle>('normal');

      evtClick = output();
}
type TStyle = 'white-skyblue' | 'skyblue' | 'blue-purple' | 'purple' | 'indigo' | '';
type TButton = 'button' | 'submit' | 'reset';
type TStyleFocus = 'focus-indigo' | '';

import { Component, input, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AtomButton } from '../../button/button';
import { StyleFocus, StyleTheme } from '../TFontStyle';
import { NgClass } from '@angular/common';
import { TFontStyle } from '../../../../core/types/TFontStyle';
import { MatIcon } from '@angular/material/icon';

/**
 * Reusable password input component with visibility toggle.
 *
 * @param {string}           placeholder    Placeholder text shown inside the input.
 *
 * @param {string}           forId          ID of the input element to connect the label with.
 *
 * @param {FormControl}      formControl    Reactive form control. Use form.get('...') and cast to FormControl.
 *
 * @param {IValid | null}    valid          Validation state: { isValid: boolean }.
 *                                          Replaces boolean true/false.
 *
 * @param {string}           message        Message to display for the validation result.
 *
 * @param {styleTheme}       styleTheme     Input theme style:
 *                                          - 'purple'
 *                                          - 'white'
 *                                          - '' (default)
 *
 * @param {StyleFocus}       styleFocus     Additional styling focus theme.
 *                                          - 'focus-indigo'
 *
 * @param {string}           className      Additional Tailwind CSS classes.
 * @param {FontStyle}        fontStyle      Font style:
 *                                          - 'normal' (default)
 *                                          - 'italic'
 *                                          - 'oblique'
 */
@Component({
      selector: 'atom-password',
      imports: [NgClass, ReactiveFormsModule, AtomButton, MatIcon],
      template: `
            @let validAndPress = keyPress && valid();
            @if (keyPress) {
                  <div class="text-sm absolute bottom-1 right-8">{{ message() }}</div>
            }
            <input
                  [class]="className() + ' ' + styleTheme() + ' ' + styleFocus()"
                  [id]="forId()"
                  [type]="getType()"
                  [formControl]="control()"
                  [placeholder]="placeholder()"
                  [style.fontStyle]="fontStyle()"
                  [ngClass]="{
                        ' incorrect': validAndPress && !valid()?.isValid,
                        ' correct': validAndPress && valid()?.isValid,
                  }"
                  (keydown)="keyPress = true"
            />
            <div class="button">
                  <atom-button (evtClick)="clickVisibilityPassword()" [class]="styleTheme()">
                        <mat-icon [className]="styleTheme()">
                              @if (visibilityPassword()) {
                                    visibility_off
                              } @else {
                                    visibility
                              }
                        </mat-icon>
                  </atom-button>
            </div>
      `,
      styleUrl: '../form-inputs.scss',
})
export class AtomPassword {
      placeholder = input<string>('');
      forId = input<string>('');
      control = input<FormControl>(new FormControl(''));
      valid = input<IValid | null>();
      message = input<string>('');
      styleTheme = input<StyleTheme>('');
      styleFocus = input<StyleFocus>('');
      className = input<string>('');
      fontStyle = input<TFontStyle>('normal');

      /* keyPress */
      protected keyPress: boolean = false;

      // clcik visibility password
      protected visibilityPassword = signal(true);

      /** Toggle the visibility of the password (show/hide). */
      protected clickVisibilityPassword() {
            this.visibilityPassword.set(!this.visibilityPassword());
      }

      /** Get input type based on visibility state ('password' or 'text'). */
      protected getType() {
            return this.visibilityPassword() ? 'password' : 'text';
      }
}

export interface IValid {
      isValid: boolean;
}

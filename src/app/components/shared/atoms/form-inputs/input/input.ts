import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TFontStyle } from '../../../../../core/types/TFontStyle';
import { StyleTheme } from '../TFontStyle';

/**
 * Reusable input component for forms with validation styling.
 *
 * @param {string}           placeholder    Placeholder text shown inside the input.
 *
 * @param {string}           forId          ID of the input element to connect the label with.
 *
 * @param {FormControl}      formControl    Reactive form control. Use form.get('...') and cast to FormControl.
 * @param {InputType}        type           Input type:
 *                                          - 'text' (default)
 *                                          - 'email'
 *                                          - 'date'
 *
 * @param {IValid | null}    valid          Validation state: { isValid: boolean }.
 *                                          Replaces boolean true/false.
 *
 * @param {string}           message        Message to display for the validation result.
 *
 * @param {styleTheme}       styleTheme     Input theme style:
 *                                          - 'purple'
 *                                          - '' (default)
 *
 * @param {string}           className      Additional Tailwind CSS classes.
 *
 * @param {FontStyle}        fontStyle      Font style:
 *                                          - 'normal' (default)
 *                                          - 'italic'
 *                                          - 'oblique'
 */
@Component({
      selector: 'atom-input',
      imports: [ReactiveFormsModule],
      template: `
            @let validAndPress = keyPress && valid();
            <input
                  [id]="forId()"
                  [type]="type()"
                  [formControl]="formControl()"
                  [placeholder]="placeholder()"
                  [style.fontStyle]="fontStyle()"
                  [class]="
                        className() +
                        ' ' +
                        styleTheme() +
                        ' ' +
                        {
                              incorrect: validAndPress && !valid()?.isValid,
                              correct: validAndPress && valid()?.isValid,
                        }
                  "
                  (keydown)="keyPress = true"
            />
      `,
      styleUrl: '../form-inputs.scss',
})
export class AtomInput {
      placeholder = input<string>('');
      forId = input<string>('');
      formControl = input<FormControl>(new FormControl(''));
      type = input<InputType>('text');
      valid = input<IValid | null>();
      message = input<string>('');
      styleTheme = input<StyleTheme>('');
      className = input<string>('');
      fontStyle = input<TFontStyle>('normal');

      /* keyPress */
      protected keyPress: boolean = false;
}
export interface IValid {
      isValid: boolean;
}

type InputType = 'text' | 'email' | 'date';

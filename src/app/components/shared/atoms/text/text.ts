import { Component, input } from '@angular/core';
import { TFontStyle } from '../../../../core/types/TFontStyle';
import { TTags } from '../../../../core/types/TTag';
import { NgTemplateOutlet } from '@angular/common';

/**
 * Reusable label component.
 *
 * @param {string} text              - Label text or content.
 *                                    If set, overrides any `<ng-content>`.
 * @param {TTags}  tag               - HTML tag to use for rendering the text:
 *                                   - 'h1'
 *                                   - 'h2'
 *                                   - 'h3'
 *                                   - 'h4'
 *                                   - 'h5'
 *                                   - 'h6'
 *                                   - 'p'
 *                                   - 'figcaption'
 *                                   - 'span'
 *                                   - 'label'
 *                                   - 'strong'
 *                                   - 'em'
 *                                   - 'code'
 *                                   - 'q'
 * @param {string} forId             - Used to link the label with an input via the `for` attribute. only for label
 * @param {styleTheme} styleTheme    - Theme style of the container:
 *                                     - 'gradient-purple-fuxea-rose'
 *                                     - 'gradient-light-purple-fuxea-rose'
 *                                     - 'gradient-rose-purple'
 *                                     - 'gradient-45deg-red-darkblue-purple'
 *                                     - 'gradient-45deg-red-red-darkblue-purple-purple'
 *                                     - '' (default)
 *
 * @param {string} className         - Additional Tailwind CSS classes for styling.
 *
 * @param {FontStyle} fontStyle      - Font style:
 *                                     - 'normal' (default)
 *                                     - 'italic'
 *                                     - 'oblique'
 */
@Component({
      selector: 'atom-text',
      imports: [NgTemplateOutlet],
      template: `
            <ng-template #tagContent>
                  @if (text()) {
                        {{ text() }}
                  } @else {
                        <ng-content />
                  }
            </ng-template>
            @switch (tag()) {
                  @case ('h1') {
                        <h1
                              [style.fontStyle]="fontStyle()"
                              [class]="themeStyle() + ' ' + className()"
                        >
                              <ng-container [ngTemplateOutlet]="tagContent" />
                        </h1>
                  }
                  @case ('h2') {
                        <h2
                              [style.fontStyle]="fontStyle()"
                              [class]="themeStyle() + ' ' + className()"
                        >
                              <ng-container [ngTemplateOutlet]="tagContent" />
                        </h2>
                  }
                  @case ('h3') {
                        <h3
                              [style.fontStyle]="fontStyle()"
                              [class]="themeStyle() + ' ' + className()"
                        >
                              <ng-container [ngTemplateOutlet]="tagContent" />
                        </h3>
                  }
                  @case ('h4') {
                        <h4
                              [style.fontStyle]="fontStyle()"
                              [class]="themeStyle() + ' ' + className()"
                        >
                              <ng-container [ngTemplateOutlet]="tagContent" />
                        </h4>
                  }
                  @case ('h5') {
                        <h5
                              [style.fontStyle]="fontStyle()"
                              [class]="themeStyle() + ' ' + className()"
                        >
                              <ng-container [ngTemplateOutlet]="tagContent" />
                        </h5>
                  }
                  @case ('h6') {
                        <h6
                              [style.fontStyle]="fontStyle()"
                              [class]="themeStyle() + ' ' + className()"
                        >
                              <ng-container [ngTemplateOutlet]="tagContent" />
                        </h6>
                  }
                  @case ('p') {
                        <p
                              [style.fontStyle]="fontStyle()"
                              [class]="themeStyle() + ' ' + className()"
                        >
                              <ng-container [ngTemplateOutlet]="tagContent" />
                        </p>
                  }
                  @case ('figcaption') {
                        <figcaption
                              [style.fontStyle]="fontStyle()"
                              [class]="themeStyle() + ' ' + className()"
                        >
                              <ng-container [ngTemplateOutlet]="tagContent" />
                        </figcaption>
                  }
                  @case ('span') {
                        <span
                              [style.fontStyle]="fontStyle()"
                              [class]="themeStyle() + ' ' + className()"
                        >
                              <ng-container [ngTemplateOutlet]="tagContent" />
                        </span>
                  }
                  @case ('label') {
                        <label
                              [for]="forId()"
                              [style.fontStyle]="fontStyle()"
                              [class]="themeStyle() + ' ' + className()"
                        >
                              <ng-container [ngTemplateOutlet]="tagContent" />
                        </label>
                  }
                  @case ('strong') {
                        <strong
                              [style.fontStyle]="fontStyle()"
                              [class]="themeStyle() + ' ' + className()"
                        >
                              <ng-container [ngTemplateOutlet]="tagContent" />
                        </strong>
                  }
                  @case ('em') {
                        <em
                              [style.fontStyle]="fontStyle()"
                              [class]="themeStyle() + ' ' + className()"
                        >
                              <ng-container [ngTemplateOutlet]="tagContent" />
                        </em>
                  }
                  @case ('code') {
                        <code
                              [style.fontStyle]="fontStyle()"
                              [class]="themeStyle() + ' ' + className()"
                        >
                              <ng-container [ngTemplateOutlet]="tagContent" />
                        </code>
                  }
                  @case ('q') {
                        <q
                              [style.fontStyle]="fontStyle()"
                              [class]="themeStyle() + ' ' + className()"
                        >
                              <ng-container [ngTemplateOutlet]="tagContent" />
                        </q>
                  }

            }
      `,
      styleUrl: 'text.scss',
})
export class AtomText {
      tag = input<TTags>('p');
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
      | 'gradient-45deg-red-darkblue-purple'
      | 'gradient-45deg-red-red-darkblue-purple-purple'
      | '';

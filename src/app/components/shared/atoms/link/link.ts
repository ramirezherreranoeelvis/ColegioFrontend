import { Component, input } from '@angular/core';
import { TFontStyle } from '../../../../core/types/TFontStyle';
import { RouterLink } from '@angular/router';
import { NgTemplateOutlet } from '@angular/common';

/**
 * Reusable card or content container component.
 *
 * @param {string} text            - Label text or content.
 *                                   If set, overrides any `<ng-content>`.
 *
 * @param {string} isExternal        - route external web o route of the sisteme web.
 *
 * @param {string} route             - route direction
 *
 * @param {styleTheme} styleTheme  - Theme style of the container:
 *                                   - '_3d-purple'
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
      selector: 'atom-link',
      imports: [RouterLink, NgTemplateOutlet],
      template: `
            <ng-template #linkContent>
                  @if (text()) {
                        {{ text() }}
                  } @else {
                        <ng-content />
                  }
            </ng-template>

            @if (isExternal()) {
                  <a
                        [href]="route()"
                        [class]="styleTheme() + ' ' + className()"
                        [style]="{ fontStyle: fontStyle() }"
                        [target]="target() || '_blank'"
                        [rel]="rel() || 'noopener noreferrer'"
                  >
                        <ng-container [ngTemplateOutlet]="linkContent" />
                  </a>
            } @else {
                  <a
                        [routerLink]="route()"
                        [class]="styleTheme() + ' ' + className()"
                        [style]="{ fontStyle: fontStyle() }"
                        [target]="target()"
                        [rel]="rel()"
                  >
                        <ng-container [ngTemplateOutlet]="linkContent" />
                  </a>
            }
      `,
      styleUrl: './link.scss',
})
export class AtomLink {
      text = input<string>('');
      isExternal = input<boolean>(false);
      route = input<string>('');
      styleTheme = input<styleTheme>('');
      className = input<string>('');
      fontStyle = input<TFontStyle>('normal');
      target = input<'' | '_blank' | '_parent' | '_self' | '_top'>('');
      rel = input('');
}
type styleTheme = '_3d-purple' | '';

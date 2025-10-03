import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgTemplateOutlet } from '@angular/common';
import { TFontStyle } from '../../../core/types/TFontStyle';

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
            <ng-template #content>
                  @if (text()) {
                  {{ text() }}
                  } @else {
                  <ng-content />
                  }
            </ng-template>

            @if (isExternal()) {
            <a
                  [href]="route()"
                  [class]="classStyle()"
                  [style]="{ fontStyle: fontStyle() }"
                  [target]="target() || '_blank'"
                  [rel]="rel() || 'noopener noreferrer'"
            >
                  <ng-container [ngTemplateOutlet]="content" />
            </a>
            } @else {
            <a
                  [routerLink]="route()"
                  [class]="classStyle()"
                  [style]="{ fontStyle: fontStyle() }"
                  [target]="target()"
                  [rel]="rel()"
            >
                  <ng-container [ngTemplateOutlet]="content" />
            </a>
            }
      `,
})
export class AtomLink {
      text = input('');
      isExternal = input(false);
      route = input('');
      styleTheme = input<styleTheme>('');
      className = input('');
      fontStyle = input<TFontStyle>('normal');
      target = input<'' | '_blank' | '_parent' | '_self' | '_top'>('');
      rel = input('');
      classStyles = {
            '_3d-purple': `
                        border-none rounded-[20em] capitalize items-center
                        flex cursor-pointer justify-center text-center
                        text-white font-500 text-[.9rem] p-[0.8em_1.5em_0.8em_1.2em]
                        bg-[linear-gradient(0deg,_#4f38cf_0%,_#8778fa_100%)]
                        shadow-[0_0.7em_1.5em_-0.5em_#4b34cebe]
                        hover:shadow-[0_0.5em_1.5em_-0.5em_#5138dabe]
                        active:shadow-[0_0.3em_1.5em_-0.5em_#4b34cebe]
                  `,
            '': '',
      };
      classStyle = computed(() => {
            const theme = this.styleTheme();
            const themeClasses = this.classStyles[theme];
            return `cursor-pointer ${themeClasses} ${this.className()}`;
      });
}
type styleTheme = '_3d-purple' | '';

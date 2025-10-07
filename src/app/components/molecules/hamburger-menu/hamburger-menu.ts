import { Component, ElementRef, output, viewChild } from '@angular/core';

@Component({
      selector: 'hamburger-menu',
      template: `
            <div #menu class="menu" (click)="handleClick()">
                  <div class="menu__content">
                        <div class="menu__line"></div>
                        <div class="menu__line"></div>
                        <div class="menu__line"></div>
                  </div>
            </div>
      `,
      styleUrl: './hamburger-menu.scss',
})
export class HamburgerMenuComponent {
      clickMenu = output<void>();
      menu = viewChild.required<ElementRef<HTMLDivElement>>('menu');

      protected handleClick(): void {
            this.clickMenu.emit();
            const menuElement = this.menu().nativeElement;
            if (menuElement.classList.contains('menu__active')) {
                  menuElement.classList.remove('menu__active');
            } else {
                  menuElement.classList.add('menu__active');
            }
      }
}

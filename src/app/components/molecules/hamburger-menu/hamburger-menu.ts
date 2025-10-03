import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

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
      @Output() clickMenu = new EventEmitter<void>();
      @ViewChild('menu') menu!: ElementRef;

      protected handleClick(): void {
            this.clickMenu.emit();
            const menuElement = this.menu.nativeElement;
            if (menuElement.classList.contains('menu__active')) {
                  menuElement.classList.remove('menu__active'); // Quitar clase
            } else {
                  menuElement.classList.add('menu__active'); // Agregar clase
            }
      }
}

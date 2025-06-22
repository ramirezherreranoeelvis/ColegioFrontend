import { Component, Input, OnInit } from '@angular/core';

@Component({
      selector: 'text-gradient',
      imports: [],
      template: '<span class="text">{{text}}</span>',
      styleUrl: './text-gradient.component.scss',
})
export class TextGradientComponent {
      @Input() text: string = '';
}

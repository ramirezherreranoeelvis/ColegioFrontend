import { Component, Input, Output, EventEmitter, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
      selector: 'input-text',
      imports: [FormsModule],
      template: `
            <input
                  type="text"
                  name=""
                  [class]="styleInput()"
                  [placeholder]="placeholder"
                  [ngModel]="text"
                  (ngModelChange)="onSearchTermChange($event)"
            />
      `,
      styleUrl: './input-text.component.scss',
})
export class InputTextComponent {
      styleInput = input('');
      @Input() placeholder: string = '';
      @Input() text!: string;
      @Output() search = new EventEmitter<string>();

      onSearchTermChange(value: string) {
            this.search.emit(value);
      }
}

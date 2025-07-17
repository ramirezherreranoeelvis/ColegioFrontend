import { Component, input, output } from '@angular/core';
import List from './list';

@Component({
      selector: 'atom-select',
      template: `
            <select
                  name="year"
                  id="select"
                  (change)="updateDataCoursesSelect($event)"
                  [class]="styleSelect()"
            >
                  <option selected [value]="0" [class]="styleOption()">
                        {{ default() }}
                  </option>
                  @for (item of items(); track $index) {
                        <option [value]="item.id" [class]="styleOption()">
                              {{ item.value }}
                        </option>
                  }
            </select>
      `,
      styleUrl: './select.scss',
})
export class AtomSelect {
      default = input('');
      items = input<List[]>([]);
      changeElement = output<string>();
      styleSelect = input('');
      styleOption = input('');

      updateDataCoursesSelect(event: Event) {
            const itemSelect = (event.target as HTMLSelectElement).value;
            this.changeElement.emit(itemSelect);
      }
}

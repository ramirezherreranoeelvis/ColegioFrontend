import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import List from './list';

@Component({
      selector: 'select-list',
      imports: [],
      template: `
            <select
                  name="year"
                  id="select"
                  (change)="updateDataCoursesSelect($event)"
                  [class]="styleSelect"
            >
                  <option selected [value]="0" [class]="styleOption">
                        {{ default }}
                  </option>
                  @for (item of items; track $index) {
                        <option [value]="item.id" [class]="styleOption">
                              {{ item.value }}
                        </option>
                  }
            </select>
      `,
      styleUrls: ['./select-list.component.scss'],
})
export class SelectListComponent {
      @Input() default!: string;
      @Input() items!: List[];
      @Output() changeElement = new EventEmitter<string>();
      @Input() styleSelect!: string;
      @Input() styleOption!: string;

      updateDataCoursesSelect(event: Event) {
            const itemSelect = (event.target as HTMLSelectElement).value;
            this.changeElement.emit(itemSelect);
      }
}

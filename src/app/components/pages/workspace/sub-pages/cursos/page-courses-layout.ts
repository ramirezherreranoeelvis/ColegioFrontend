import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
      selector: 'page-courses-layout',
      template: ` <router-outlet /> `,
      imports: [RouterOutlet],
})
export default class PageCoursesLayout {}

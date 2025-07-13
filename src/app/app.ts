import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AtomInput } from "./components/shared/atoms/form-inputs/input/input";

@Component({
      selector: 'app-root',
      imports: [RouterOutlet, AtomInput],
      template: `<router-outlet /> `,
      // templateUrl: 'app.html',
})
export class App {
      protected title = 'ColegioFrontend';
}

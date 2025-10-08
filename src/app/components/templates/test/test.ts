import { Component, output } from '@angular/core';
import { AtomButtonPayment } from '../../atoms/payment/payment';
import Deatils from '../../atoms/payment/interfaces/details';

@Component({
      selector: 'template-test',
      imports: [AtomButtonPayment],
      templateUrl: './test.component.html',
})
export class TemplateTest {
      evtPayEnrollment = output<Deatils>();
}

import {
      Component,
      ElementRef,
      input,
      OnChanges,
      OnInit,
      output,
      SimpleChanges,
      viewChild,
} from '@angular/core';
import { ApiPaypal } from './service/paypal';
import Deatils from './interfaces/details';

@Component({
      selector: 'atom-button-payment',
      template: `
            <div class="w-[300px]">
                  <div #paypal></div>
            </div>
      `,
})
export class AtomButtonPayment implements OnInit, OnChanges {
      dinero = input.required<string>();
      paypalElement = viewChild.required<ElementRef<HTMLDivElement>>('paypal');
      evtRegistrarPago = output<Deatils>();

      constructor(private paypalService: ApiPaypal) {}

      async ngOnInit() {
            try {
                  await this.paypalService.loadPayPalScript();
                  this.realizarPago();
            } catch (error) {
                  console.error('PayPal script could not be loaded.', error);
            }
      }

      async ngOnChanges(changes: SimpleChanges) {
            try {
                  if (changes['dinero'] && changes['dinero'].currentValue) {
                        await this.paypalService.loadPayPalScript();
                        this.realizarPago();
                  }
            } catch (error) {
                  console.error('PayPal script could not be loaded.', error);
            }
      }

      protected realizarPago(): void {
            this.paypalService.renderizarBotonPaypal(
                  this.paypalElement(),
                  this.dinero(),
                  this.registrarPago.bind(this),
                  this.handlePagoError.bind(this),
            );
      }

      protected async registrarPago(details: Deatils) {
            if (details.status !== 'COMPLETED') {
                  this.handlePagoError('El pago no fue completado por PayPal.');
                  return;
            }
            this.evtRegistrarPago.emit(details);
      }

      protected handlePagoError(err: any): void {
            console.error('Error durante el pago', err);
      }
}

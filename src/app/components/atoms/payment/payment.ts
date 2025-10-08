import {
      Component,
      ElementRef,
      input,
      OnChanges,
      OnInit,
      SimpleChanges,
      viewChild,
} from '@angular/core';
import { ApiPaypal } from './api/paypal';
import { firstValueFrom } from 'rxjs';
import { ApiPayment } from './api/payment';
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
      protected pagosRealizados: Deatils[] = [];
      dinero = input.required<string>();
      idPay = input.required<number>();
      paypalElement = viewChild.required<ElementRef<HTMLDivElement>>('paypal');

      constructor(
            private paypalService: ApiPaypal,
            private apiPayment: ApiPayment,
      ) {}

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
            this.pagosRealizados.push(details);
            try {
                  console.log(`Confirmando pago en backend para nuestro ID: ${this.idPay()}`);
                  const response = firstValueFrom(
                        this.apiPayment.confirmarPago(this.idPay().toString(), details),
                  );
                  console.log('Respuesta del backend:', response);
                  alert('Pago registrado y confirmado exitosamente en el sistema.');
            } catch (error) {
                  console.error('Error al confirmar el pago en el backend', error);
                  alert('Hubo un error al confirmar tu pago. Por favor, contacta a soporte.');
            }
      }

      protected handlePagoError(err: any): void {
            console.error('Error durante el pago', err);
      }
}

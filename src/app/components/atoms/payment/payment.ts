import {
      Component,
      ElementRef,
      input,
      OnChanges,
      OnInit,
      SimpleChanges,
      viewChild,
} from '@angular/core';
import { PaypalService } from './paypal.service';
import { firstValueFrom } from 'rxjs';
import { ApiPayment } from './api-backend';
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
            private paypalService: PaypalService,
            private apiPayment: ApiPayment,
      ) {}

      ngOnInit(): void {
            this.paypalService
                  .loadPayPalScript()
                  .then(() => {
                        this.realizarPago();
                  })
                  .catch((err) => {
                        console.error('PayPal script could not be loaded.', err);
                  });
      }

      ngOnChanges(changes: SimpleChanges): void {
            if (changes['dinero'] && changes['dinero'].currentValue) {
                  this.paypalService
                        .loadPayPalScript()
                        .then(() => {
                              this.realizarPago();
                        })
                        .catch((err) => {
                              console.error('PayPal script could not be loaded.', err);
                        });
            }
      }

      public cancelarPago(idPayment: number): void {}

      protected realizarPago(): void {
            this.paypalService.renderizarBotonPaypal(
                  this.paypalElement(),
                  this.dinero(),
                  this.registrarPago.bind(this),
                  this.handlePagoError.bind(this),
            );
      }

      protected async registrarPago(detalles: Deatils) {
            this.pagosRealizados.push(detalles);
            try {
                  const response = firstValueFrom(this.apiPayment.cancelarPago(this.idPay()));
                  console.log(response);
                  alert('Pago cancelado exitosamente.');
            } catch (error) {
                  console.error('Error al cancelar el pago', error);
            }
      }

      protected handlePagoError(err: any): void {
            console.error('Error durante el pago', err);
      }
}

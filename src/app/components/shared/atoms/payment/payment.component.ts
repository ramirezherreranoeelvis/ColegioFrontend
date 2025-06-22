import {
      Component,
      ElementRef,
      Input,
      OnChanges,
      OnInit,
      SimpleChanges,
      ViewChild,
} from '@angular/core';
import { PaymentService } from './payment.service';

@Component({
      selector: 'button-payment',
      template: `
            <div class="options">
                  <div #paypal></div>
            </div>
      `,
      styleUrl: './payment.component.scss',
})
export class PaymentComponent implements OnInit, OnChanges {
      protected pagosRealizados: any[] = [];
      @Input() dinero: any;
      @Input() idPay!: number;

      @ViewChild('paypal', { static: true }) paypalElement!: ElementRef;
      constructor(private paymentService: PaymentService) {}

      ngOnInit(): void {
            this.paymentService
                  .loadPayPalScript()
                  .then(() => {
                        this.realizarPago(this.dinero);
                  })
                  .catch((err) => {
                        console.error(
                              'PayPal script could not be loaded.',
                              err,
                        );
                  });
      }

      ngOnChanges(changes: SimpleChanges): void {
            if (changes['dinero'] && changes['dinero'].currentValue) {
                  this.paymentService
                        .loadPayPalScript()
                        .then(() => {
                              this.realizarPago(this.dinero);
                        })
                        .catch((err) => {
                              console.error(
                                    'PayPal script could not be loaded.',
                                    err,
                              );
                        });
            }
      }

      public cancelarPago(idPayment: number): void {}

      protected realizarPago(monto: string): void {
            this.paymentService.renderizarBotonPaypal(
                  this.paypalElement,
                  monto,
                  this.registrarPago.bind(this),
                  this.handlePagoError.bind(this),
            );
      }

      protected registrarPago(detalles: any): void {
            this.pagosRealizados.push(detalles);
            this.paymentService.cancelarPago(this.idPay).subscribe(
                  (response) => {
                        console.log(response);
                        alert('Pago cancelado exitosamente.');
                  },
                  (error) => {
                        console.error('Error al cancelar el pago', error);
                  },
            );
      }

      protected handlePagoError(err: any): void {
            console.error('Error durante el pago', err);
      }
}

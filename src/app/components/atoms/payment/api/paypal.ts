import { Injectable, ElementRef } from '@angular/core';
import Data from '../interfaces/data';
import Actions from '../interfaces/actions';
import Deatils from '../interfaces/details';

declare var paypal: any;

@Injectable({ providedIn: 'root' })
export class ApiPaypal {
      private scriptLoaded = false;
      public loadPayPalScript(): Promise<void> {
            if (this.scriptLoaded) {
                  return Promise.resolve();
            }

            return new Promise((resolve, reject) => {
                  const script = document.createElement('script');
                  script.src =
                        'https://www.paypal.com/sdk/js?client-id=AZ3ZMyV0QjkOid1JQnGFWmz-NXDL2hpmVbhu1NwVe6xgeT-2wr2q2lKNOYf8R4zNmrmDBgUnWw2kQIMH';
                  script.onload = () => resolve();
                  script.onerror = () => reject(new Error('PayPal script load error'));
                  document.body.appendChild(script);
            });
      }

      public renderizarBotonPaypal(
            elementRef: ElementRef,
            monto: string,
            onPagoAprobado: (detalles: Deatils) => void,
            onPagoError: (err: any) => void,
      ): void {
            paypal.Buttons({
                  style: {
                        layout: 'horizontal',
                  },
                  createOrder: (data: Data, actions: Actions) => {
                        return actions.order.create({
                              purchase_units: [{ amount: { value: monto } }],
                        });
                  },
                  onApprove: (data: Data, actions: Actions) => {
                        return actions.order.capture().then((details: Deatils) => {
                              onPagoAprobado(details);
                        });
                  },
                  onError: (err: any) => {
                        onPagoError(err);
                  },
            }).render(elementRef.nativeElement);
      }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, ElementRef } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pago } from '../../../../application/interfaces/Pago';

declare var paypal:any;

@Injectable({
      providedIn: 'root',
})
export class PaymentService {
      private url: string = 'http://localhost:8080/payment';
      constructor(private httpClient: HttpClient) {}

      public obtenerDeudas(dniStudent: string): Observable<Pago[]> {
            const params = new HttpParams().set('dniStudent', dniStudent);
            const urlPagoPendiente = `${this.url}/pagosPendientes`;
            return this.httpClient
                  .get<Pago[]>(urlPagoPendiente, { params })
                  .pipe(map((response) => response));
      }

      public cancelarPago(idPayment: number): Observable<any> {
            const params = new HttpParams().set('idPayment', idPayment);
            const urlCancelarPago = `${this.url}/processPayment`;
            return this.httpClient
                  .post<any>(urlCancelarPago, null, { params })
                  .pipe(map((data) => data));
      }

      //paypal
      public loadPayPalScript(): Promise<void> {
            return new Promise((resolve, reject) => {
                  const script = document.createElement('script');
                  script.src =
                        'https://www.paypal.com/sdk/js?client-id=AZ3ZMyV0QjkOid1JQnGFWmz-NXDL2hpmVbhu1NwVe6xgeT-2wr2q2lKNOYf8R4zNmrmDBgUnWw2kQIMH';
                  script.onload = () => resolve();
                  script.onerror = () =>
                        reject(new Error('PayPal script load error'));
                  document.body.appendChild(script);
            });
      }

      public renderizarBotonPaypal(
            elementRef: ElementRef,
            monto: string,
            onPagoAprobado: (detalles: any) => void,
            onPagoError: (err: any) => void,
      ): void {
            paypal.Buttons({
                  style: {
                        layout: 'horizontal',
                  },
                  createOrder: (data: any, actions: any) => {
                        return actions.order.create({
                              purchase_units: [
                                    {
                                          amount: {
                                                value: monto,
                                          },
                                    },
                              ],
                        });
                  },
                  onApprove: (data: any, actions: any) => {
                        return actions.order.capture().then((details: any) => {
                              onPagoAprobado(details);
                        });
                  },
                  onError: (err: any) => {
                        onPagoError(err);
                  },
            }).render(elementRef.nativeElement);
      }
}

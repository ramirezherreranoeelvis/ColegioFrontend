import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Pago } from '../interfaces/Pago';
import { environment } from '../../../../../core/env/environment.development';
import Deatils from '../interfaces/details';

@Injectable({ providedIn: 'root' })
export class ApiPayment {
      private url: string = `${environment.urlPayment}/payment`;
      constructor(private httpClient: HttpClient) {}

      public obtenerDeudas(dniStudent: string): Observable<Pago[]> {
            const params = new HttpParams().set('dniStudent', dniStudent);
            const urlPagoPendiente = `${this.url}/pagosPendientes`;
            return this.httpClient
                  .get<Pago[]>(urlPagoPendiente, { params })
                  .pipe(map((response) => response));
      }

      /**
       * Confirma un pago en el backend después de que PayPal lo aprueba.
       * @param paymentId El ID de nuestro sistema (el que está PENDIENTE).
       * @param details El objeto de detalles de la transacción de PayPal.
       */
      public confirmarPago(paymentId: string, details: Deatils): Observable<any> {
            // La URL correcta según el plan: POST /api/payments/{paymentId}/process
            const urlConfirmarPago = `${this.url}/${paymentId}/process`;

            // Enviamos los detalles de PayPal en el cuerpo de la petición.
            return this.httpClient.post<any>(urlConfirmarPago, details).pipe(map((data) => data));
      }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Pago } from '../../../infraestructure/pages/workspace/infrastructura/interfaces/Pago';

@Injectable({ providedIn: 'root' })
export class ApiPayment {
      private url: string = 'http://localhost:8010/payment';
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
}

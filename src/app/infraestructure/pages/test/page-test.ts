import { Component } from '@angular/core';
import { TemplateTest } from '../../../components/templates/test/test';
import { firstValueFrom } from 'rxjs';
import { ApiPayment } from '../workspace/infrastructura/api/payment';
import Deatils from '../workspace/infrastructura/interfaces/details';

@Component({
      selector: 'page-test',
      imports: [TemplateTest],
      template: `<template-test (evtPayEnrollment)="registrarPago($event)" />`,
})
export default class PageTest {
      idPay = 1;
      constructor(private apiPayment: ApiPayment) {}
      protected async registrarPago(details: Deatils) {
            try {
                  console.log(`Confirmando pago en backend para nuestro ID: ${this.idPay}`);
                  const response = firstValueFrom(
                        this.apiPayment.confirmarPago(this.idPay.toString(), details),
                  );
                  console.log('Respuesta del backend:', response);
                  alert('Pago registrado y confirmado exitosamente en el sistema.');
            } catch (error) {
                  console.error('Error al confirmar el pago en el backend', error);
                  alert('Hubo un error al confirmar tu pago. Por favor, contacta a soporte.');
            }
      }
}

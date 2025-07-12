import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ParentService } from '../../../../pages/workspace/infrastructura/api/parent.service';
import { Pago } from '../../../../pages/workspace/infrastructura/interfaces/Pago';
import { Student } from '../../../../pages/workspace/infrastructura/interfaces/student';
import { PaymentService } from '../../../atoms/payment/payment.service';
import List from '../../../atoms/select-list/list';
import { PaymentComponent } from '../../../atoms/payment/payment.component';
import { SelectListComponent } from '../../../atoms/select-list/select-list.component';
import { TextGradientComponent } from '../../../atoms/text-gradient/text-gradient.component';

@Component({
      selector: 'template-registrar-pago-mensual',
      imports: [PaymentComponent, SelectListComponent, TextGradientComponent],
      templateUrl: './template-registrar-pago-mensual.component.html',
      styleUrl: './template-registrar-pago-mensual.scss',
})
export class TemplateRegistrarPagoMensual implements OnInit {
      protected dniParent: string = '99233923';
      protected students: Student[] = [];
      protected studentSelect: Student | null = null;
      protected mensualidadesPendientes: Pago[] = [];
      protected pagoSelect: Pago | null = null;
      protected isDetalles: boolean = false;
      stutentList: List[] = [];
      constructor(
            private paymentService: PaymentService,
            private parentService: ParentService,
      ) {}

      public ngOnInit(): void {
            this.getStudents();
      }
      async getStudents() {
            try {
                  this.students = await firstValueFrom(
                        this.parentService.getStudent(this.dniParent),
                  );
                  this.stutentList = this.students.map((student) => {
                        return {
                              id: student.dni,
                              value: `${student.name} ${student.surnamePaternal} ${student.surnameMaternal}`,
                        };
                  });
            } catch (error) {
                  console.error('Error fetching students', error);
            }
      }
      public updateDataStudentSelect(DNI: string): void {
            this.isDetalles = false;
            if (DNI === '0') {
                  this.studentSelect = null;
                  this.mensualidadesPendientes = []; // Resetea el monto cuando no hay selección
                  return;
            }
            this.studentSelect =
                  this.students.find((s) => s.dni === DNI) || null;
            this.paymentService
                  .obtenerDeudas(this.studentSelect!.dni)
                  .subscribe(
                        (data: Pago[]) => {
                              this.mensualidadesPendientes = data.filter(
                                    (pago) =>
                                          pago.description === 'mensualidad',
                              );
                        },
                        (error) => {
                              console.error(
                                    'No se pudo obtener los pagos pendientes',
                                    error,
                              );
                        },
                  );
      }

      protected verDetalles(idPago: number) {
            this.pagoSelect =
                  this.mensualidadesPendientes.find(
                        (pago) => pago.idPago == idPago,
                  ) || null;
            this.isDetalles = true;
      }
}

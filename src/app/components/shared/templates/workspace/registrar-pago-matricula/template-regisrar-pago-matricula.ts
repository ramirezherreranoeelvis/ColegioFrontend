import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ParentService } from '../../../../pages/workspace/infrastructura/api/parent.service';
import { Pago } from '../../../../pages/workspace/infrastructura/interfaces/Pago';
import { Student } from '../../../../pages/workspace/infrastructura/interfaces/student';
import { PaymentService } from '../../../atoms/payment/payment.service';
import List from '../../../atoms/select-list/list';
import { PaymentComponent } from '../../../atoms/payment/payment.component';
import { TextGradientComponent } from '../../../atoms/text-gradient/text-gradient.component';
import { SelectListComponent } from '../../../atoms/select-list/select-list.component';

@Component({
      selector: 'template-regisrar-pago-matricula',
      imports: [PaymentComponent, TextGradientComponent, SelectListComponent],
      templateUrl: './template-regisrar-pago-matricula.component.html',
      styleUrl: './template-regisrar-pago-matricula.scss',
})
export class TemplateRegisrarPagoMatricula implements OnInit {
      protected dniParent: string = '99233923';
      protected students: Student[] = [];
      protected studentSelect: Student | null = null;
      protected matriculaPendiente: Pago | null = null;
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

      public updateDataStudentSelect(dni: string): void {
            if (dni === '0') {
                  this.studentSelect = null;
                  this.matriculaPendiente = null; // Resetea el monto cuando no hay selección
                  return;
            }
            this.studentSelect =
                  this.students.find((s) => s.dni === dni) || null;
            if (!this.studentSelect) {
                  this.matriculaPendiente = null;
                  return;
            }
            this.paymentService.obtenerDeudas(this.studentSelect.dni).subscribe(
                  (data: Pago[]) => {
                        this.matriculaPendiente =
                              data.find(
                                    (pago) => pago.description === 'Matricula',
                              ) || null;
                  },
                  (error) => {
                        console.error(
                              'No se pudo obtener los pagos pendientes',
                              error,
                        );
                  },
            );
      }
}

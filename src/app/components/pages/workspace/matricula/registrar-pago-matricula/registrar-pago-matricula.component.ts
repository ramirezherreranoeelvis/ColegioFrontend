import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { ParentService } from '../../parent.service';

import { firstValueFrom } from 'rxjs';
import { Pago } from '../../../../../application/interfaces/Pago';
import { Student } from '../../../../../application/interfaces/student';
import { PaymentComponent } from '../../../../shared/atoms/payment/payment.component';
import { PaymentService } from '../../../../shared/atoms/payment/payment.service';
import List from '../../../../shared/atoms/select-list/list';
import { SelectListComponent } from '../../../../shared/atoms/select-list/select-list.component';
import { TextGradientComponent } from '../../../../shared/atoms/text-gradient/text-gradient.component';

@Component({
      selector: 'app-registrar-pago-matricula',
      standalone: true,
      imports: [PaymentComponent, TextGradientComponent, SelectListComponent],
      templateUrl: './registrar-pago-matricula.component.html',
      styleUrl: './registrar-pago-matricula.component.scss',
})
export default class RegistrarPagoMatriculaComponent implements OnInit {
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

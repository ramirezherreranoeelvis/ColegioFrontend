import { Component } from '@angular/core';
import { AtomButtonPayment } from '../../../atoms/payment/payment';
import { AtomSelect } from '../../../atoms/select/select';
import { AtomText } from '../../../atoms/text/text';
import List from '../../../atoms/select/list';
import { Student } from '../../../../infraestructure/pages/workspace/infrastructura/interfaces/student';
import { Pago } from '../../../../infraestructure/pages/workspace/infrastructura/interfaces/Pago';
import { PaymentService } from '../../../atoms/payment/payment.service';
import { ParentService } from '../../../../infraestructure/pages/workspace/infrastructura/api/parent.service';
import { firstValueFrom } from 'rxjs';

@Component({
      selector: 'template-regisrar-pago-matricula',
      imports: [AtomButtonPayment, AtomSelect, AtomText],
      templateUrl: './regisrar-pago-matricula.component.html',
      styleUrl: './regisrar-pago-matricula.scss',
})
export class TemplateRegisrarPagoMatricula {
      dniParent: string = '99233923';
      matriculaPendiente: Pago | null = null;
      studentSelect: Student | null = null;
      stutentList: List[] = [];
      students: Student[] = [];
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
            this.studentSelect = this.students.find((s) => s.dni === dni) || null;
            if (!this.studentSelect) {
                  this.matriculaPendiente = null;
                  return;
            }
            this.paymentService.obtenerDeudas(this.studentSelect.dni).subscribe(
                  (data: Pago[]) => {
                        this.matriculaPendiente =
                              data.find((pago) => pago.description === 'Matricula') || null;
                  },
                  (error) => {
                        console.error('No se pudo obtener los pagos pendientes', error);
                  },
            );
      }
}

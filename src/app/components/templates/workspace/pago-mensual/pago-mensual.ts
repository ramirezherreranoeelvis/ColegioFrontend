import { Component } from '@angular/core';
import { AtomText } from '../../../atoms/text/text';
import { AtomSelect } from '../../../atoms/select/select';
import { AtomButtonPayment } from '../../../atoms/payment/payment';
import { firstValueFrom } from 'rxjs';
import { ParentService } from '../../../../infraestructure/pages/workspace/infrastructura/api/parent.service';
import { Pago } from '../../../../infraestructure/pages/workspace/infrastructura/interfaces/Pago';
import { Student } from '../../../../infraestructure/pages/workspace/infrastructura/interfaces/student';
import List from '../../../atoms/select/list';
import { ApiPayment } from '../../../../infraestructure/pages/workspace/infrastructura/api/payment';

@Component({
      selector: 'template-pago-mensual',
      imports: [AtomText, AtomSelect, AtomButtonPayment],
      templateUrl: './pago-mensual.component.html',
      styleUrl: './pago-mensual.scss',
})
export class TemplatePagoMensual {
      protected dniParent: string = '99233923';
      protected students: Student[] = [];
      protected studentSelect: Student | null = null;
      protected mensualidadesPendientes: Pago[] = [];
      protected pagoSelect: Pago | null = null;
      protected isDetalles: boolean = false;
      stutentList: List[] = [];
      constructor(
            private apiPayment: ApiPayment,
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
            this.studentSelect = this.students.find((s) => s.dni === DNI) || null;
            this.apiPayment.obtenerDeudas(this.studentSelect!.dni).subscribe(
                  (data: Pago[]) => {
                        this.mensualidadesPendientes = data.filter(
                              (pago) => pago.description === 'mensualidad',
                        );
                  },
                  (error: any) => {
                        console.error('No se pudo obtener los pagos pendientes', error);
                  },
            );
      }

      protected verDetalles(idPago: number) {
            this.pagoSelect =
                  this.mensualidadesPendientes.find((pago) => pago.idPago == idPago) || null;
            this.isDetalles = true;
      }
}

import { Injectable, Signal, signal } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Injectable({
      providedIn: 'root',
})
export default class FormControlUtil {
      formGroup!: FormGroup;

      public getControl(controlName: string) {
            return this.formGroup.get(controlName);
      }

      public castFormControl(
            abstractControl: AbstractControl | null,
      ): FormControl {
            return abstractControl as FormControl;
      }

      public getFormControl(controlName: string): FormControl {
            return this.formGroup.get(controlName) as FormControl;
      }

      public getValid(controlName: string): boolean {
            let control = this.formGroup.get(controlName);
            if (control?.valid && !control?.hasError('required')) {
                  return true;
            }
            return false;
      }
}

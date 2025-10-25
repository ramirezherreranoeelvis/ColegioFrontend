import { Component, input, output } from '@angular/core';
import { AtomButton } from '../../../atoms/button/button';
import { AtomInput } from '../../../atoms/form-inputs/input/input';
import { AtomPassword } from '../../../atoms/form-inputs/password/password';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import FormControlUtil from '../../../../infraestructure/utils/FormControlUtil';
import { AtomText } from '../../../atoms/text/text';
import IProfileSignIn from '../../../../infraestructure/pages/login/infrastructure/interfaces/Iprofile-sign-in';

@Component({
      selector: 'form-login',
      imports: [FormsModule, ReactiveFormsModule, AtomText, AtomInput, AtomPassword, AtomButton],
      templateUrl: './login.html',
})
export class FormLogin {
      formBody = input.required<FormGroup<IProfileSignIn>>();
      evtSubmitLogin = output();

      constructor(protected formUtil: FormControlUtil) {}

      ngOnInit(): void {
            this.formUtil.formGroup = this.formBody();
      }

      public getMessage(
            controlName: string,
            require: string,
            invalid: string,
            correct: string,
      ): string {
            let control = this.formUtil.getControl(controlName);
            if (!control) {
                  return '';
            }
            if (control.hasError('required')) {
                  return require;
            }
            if (control.invalid) {
                  return invalid;
            }
            return correct;
      }
}

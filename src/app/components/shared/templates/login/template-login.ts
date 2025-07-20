import { Component, input, OnInit, output } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AtomButton } from '../../atoms/button/button';
import { AtomLabel } from '../../atoms/label/label';
import { AtomInput } from '../../atoms/form-inputs/input/input';
import { AtomPassword } from '../../atoms/form-inputs/password/password';
import { IProfileSignIn } from '../../../pages/login/page-login';
import FormControlUtil from '../../../../infrastructure/utils/FormControlUtil';
import { IconCactus } from '../../icons/cactus/icon-cactus';

@Component({
      selector: 'template-login',
      imports: [
            FormsModule,
            AtomButton,
            AtomLabel,
            AtomInput,
            AtomPassword,
            ReactiveFormsModule,
            IconCactus,
      ],
      templateUrl: './template-login.html',
      styleUrl: './template-login.scss',
})
export class TemplateLogin implements OnInit {
      profile = input.required<FormGroup<IProfileSignIn>>();
      submitForm = output();

      constructor(protected formUtil: FormControlUtil) {}
      ngOnInit(): void {
            this.formUtil.formGroup = this.profile();
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

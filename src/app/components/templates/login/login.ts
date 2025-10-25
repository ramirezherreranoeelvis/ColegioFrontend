import { Component, input, OnInit, output } from '@angular/core';
import {
      FormControl,
      FormGroup,
      FormsModule,
      ReactiveFormsModule,
      Validators,
} from '@angular/forms';
import { Panel } from '../../wrappers/panel/panel';
import FormControlUtil from '../../../infraestructure/utils/FormControlUtil';
import { IconCactus } from '../../icons/cactus/icon-cactus';
import { AtomText } from '../../atoms/text/text';
import { FormLogin } from '../../organims/forms/login/login';
import IProfileSignIn from '../../../infraestructure/pages/login/infrastructure/interfaces/Iprofile-sign-in';

@Component({
      selector: 'template-login',
      imports: [Panel, FormsModule, ReactiveFormsModule, IconCactus, AtomText, FormLogin],
      templateUrl: './login.html',
})
export class TemplateLogin implements OnInit {
      profile = input<FormGroup<IProfileSignIn>>(
            new FormGroup({
                  username: new FormControl('', [Validators.required]),
                  password: new FormControl('', [
                        Validators.required,
                        Validators.maxLength(8),
                        Validators.minLength(8),
                  ]),
            })
      );
      evtSubmitLogin = output();

      constructor(protected formUtil: FormControlUtil) {}

      ngOnInit(): void {
            this.formUtil.formGroup = this.profile();
      }

      public getMessage(
            controlName: string,
            require: string,
            invalid: string,
            correct: string
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

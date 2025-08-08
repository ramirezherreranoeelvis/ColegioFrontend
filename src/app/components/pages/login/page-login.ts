import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';
import { AuthApi } from './infrastructure/api/authApi';
import { AuthTokenManager } from '../../../infrastructure/services/AuthTokenManager';
import { TemplateLogin } from '../../shared/templates/login/template-login';
import ApiError from '../../../core/errors/api-error';

@Component({
      selector: 'page-login',
      imports: [TemplateLogin],
      template: `
            <template-login [profile]="profile" (evtSubmitLogin)="submitSignIn()" />
      `,
})
export default class PageLogin {
      protected profile: FormGroup<IProfileSignIn> = new FormGroup({
            username: new FormControl('', [Validators.required]),
            password: new FormControl('', [
                  Validators.required,
                  Validators.maxLength(8),
                  Validators.minLength(8),
            ]),
      });
      constructor(
            private router: Router,
            private authApi: AuthApi,
            private authTokenManager: AuthTokenManager,
      ) {}

      protected submitSignIn = () => {
            if (this.profile.valid) {
                  const username = this.profile.get('username')?.value ?? '';
                  const password = this.profile.get('password')?.value ?? '';
                  alert('password : ' + password);
                  alert('username : ' + username);
                  this.signIn(username, password);
            } else {
                  alert(
                        'El formulario no es válido. Por favor, revisa los campos.',
                  );
            }
      };

      private async signIn(username: string, password: string) {
            try {
                  const userToken = await firstValueFrom(
                        this.authApi.login(username, password),
                  );
                  if (!userToken) {
                        throw new ApiError(
                              'Error al obtener los datos del usuario',
                        );
                  }
                  this.authTokenManager.setCurrentUser(userToken);
                  this.router.navigate(['workspace']);
            } catch (error) {
                  throw new ApiError('Error al obtener los datos del usuario');
            }
      }
}
export interface IProfileSignIn {
      username: FormControl<string | null>;
      password: FormControl<string | null>;
}

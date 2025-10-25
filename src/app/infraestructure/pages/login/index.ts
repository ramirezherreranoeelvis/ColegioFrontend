import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';
import { AuthApi } from './infrastructure/api/authApi';
import { TemplateLogin } from '../../../components/templates/login/login';
import ApiError from '../../../core/errors/api-error';
import { AuthTokenManager } from '../../services/AuthTokenManager';
import IProfileSignIn from './infrastructure/interfaces/Iprofile-sign-in';

@Component({
      selector: 'page-login',
      imports: [TemplateLogin],
      template: ` <template-login /> `,
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
                  this.signIn(username, password);
            } else {
                  alert('El formulario no es válido. Por favor, revisa los campos.');
            }
      };

      private async signIn(username: string, password: string) {
            try {
                  const userToken = await firstValueFrom(this.authApi.login(username, password));
                  if (!userToken) {
                        throw new ApiError('Error al obtener los datos del usuario');
                  }
                  this.authTokenManager.setCurrentUser(userToken);
                  this.router.navigate(['cursos']);
            } catch (error) {
                  throw new ApiError('Error al obtener los datos del usuario');
            }
      }
}

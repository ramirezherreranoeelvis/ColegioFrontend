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
      template: ` <template-login [profile]="profile" (evtSubmitLogin)="submitSignIn()" /> `,
})
export default class PageLogin {
      protected profile = new FormGroup<IProfileSignIn>({
            username: new FormControl('', {
                  nonNullable: true,
                  validators: [Validators.required],
            }),
            password: new FormControl('', {
                  nonNullable: true,
                  validators: [
                        Validators.required,
                        Validators.maxLength(8),
                        Validators.minLength(8),
                  ],
            }),
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
                  alert('Formulario válido. Enviando datos...');
                  this.signIn(username, password);
            } else {
                  alert('El formulario no es válido. Por favor, revisa los campos.');
            }
      };

      private async signIn(username: string, password: string) {
            try {
                  alert('Iniciando sesión...');
                  const userToken = await firstValueFrom(this.authApi.login(username, password));
                  if (!userToken) {
                        throw new ApiError('Error al obtener los datos del usuario');
                  }
                  alert('Inicio de sesión exitoso');
                  alert(`Token: ${userToken.accessToken}`);
                  this.authTokenManager.setCurrentUser(userToken);
                  console.log('Token almacenado en AuthTokenManager');
                  console.log(this.authTokenManager.userToken$()?.accessToken);
                  this.router.navigate(['cursos']);
            } catch (error) {
                  throw new ApiError('Error al obtener los datos del usuario');
            }
      }
}

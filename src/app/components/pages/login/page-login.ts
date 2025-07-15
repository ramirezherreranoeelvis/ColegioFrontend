import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';
import { AuthApi } from './infrastructure/api/authApi';
import { AuthTokenManager } from '../../../core/utils/AuthTokenManager';
import { TemplateLogin } from '../../shared/templates/login/template-login';

@Component({
      selector: 'page-login',
      imports: [TemplateLogin],
      template: `<template-login
            [profile]="profile"
            (submitForm)="submitSignIn()"
      /> `,
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
                  if (userToken) {
                        this.authTokenManager.setCurrentUser(userToken);
                        this.router.navigate(['workspace']);
                  } else {
                        alert('Usted no tiene acceso al sistema');
                  }
            } catch (error) {
                  alert('No se pudo ingresar');
                  console.error(
                        'Error al obtener los datos del usuario:',
                        error,
                  );
            }
      }
}
export interface IProfileSignIn {
      username: FormControl<string | null>;
      password: FormControl<string | null>;
}

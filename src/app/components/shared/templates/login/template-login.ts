import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../../pages/login/infrastructure/api/auth.service';
import { AtomButton } from '../../atoms/button/button';
import { AtomLabel } from '../../atoms/label/label';
import { AtomInput } from "../../atoms/form-inputs/input/input";
import { AtomPassword } from "../../atoms/form-inputs/password/password";

@Component({
      selector: 'template-login',
      imports: [CommonModule, FormsModule, AtomButton, AtomLabel, AtomInput, AtomPassword],
      templateUrl: './template-login.html',
      styleUrl: './template-login.scss',
})
export class TemplateLogin {
      constructor(
            private router: Router,
            private authService: AuthService,
      ) {}

      public async goToSesion(form: NgForm) {
            const { username, password } = form.value;
            try {
                  const userToken = await firstValueFrom(
                        this.authService.login(username, password),
                  );
                  if (userToken) {
                        this.authService.setCurrentUser(userToken);
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

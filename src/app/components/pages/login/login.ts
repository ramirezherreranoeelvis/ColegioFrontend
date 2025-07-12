import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthService } from './infrastructure/api/auth.service';

@Component({
      selector: 'page-login',
      imports: [CommonModule, FormsModule],
      templateUrl: './login.html',
      styleUrl: './login.scss',
})
export default class LoginPage {
      protected contenedorActivo: number = 0;

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

      protected selectInputText(contenedor: number) {
            this.contenedorActivo = contenedor;
      }
}

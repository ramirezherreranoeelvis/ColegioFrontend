import { Component, input } from '@angular/core';

@Component({
      selector: 'card-perfil',
      imports: [],
      templateUrl: './perfil.component.html',
})
export class CardPerfil {
      user = input<User>({
            name: 'Alberto Edu Alanya Suarez',
            dni: '12345678',
            user: 'AAlanyaSu',
      });
}
interface User {
      name: string;
      dni: string;
      user: string;
}

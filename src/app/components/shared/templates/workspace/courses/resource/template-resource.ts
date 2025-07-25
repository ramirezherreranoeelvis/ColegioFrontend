import { Component, input } from '@angular/core';
import { AtomLabel } from '../../../../atoms/label/label';
import { MenuExitComponent } from '../../../../molecules/menu-exit/menu-exit.component';
import { AtomLink } from '../../../../atoms/link/link';
import { RecursoContenidoCurso } from '../../../../../pages/workspace/sub-pages/cursos/infrastructure/interfaces/resource-content';

@Component({
      selector: 'template-resource',
      imports: [AtomLabel, MenuExitComponent, AtomLink],
      templateUrl: './template-resource.component.html',
      styleUrl: './template-resource.scss',
})
export class TemplateResource {
      codeCourse = input('803566083');
      resource = input<RecursoContenidoCurso>({
            code: '1000001',
            nombre: 'Clase N°1',
            tipo: 'data',
            items: [
                  {
                        dniPerson: '',
                        provider: 'teacherContent',
                        tipo: 'text',
                        contenido: 'Revisa detenidamente la información presentada en este material y desarrolla las actividades propuestas.',
                  },
                  {
                        dniPerson: '',
                        provider: 'teacherContent',
                        tipo: 'file',
                        contenido: 'ppt de la clase',
                        route: 'https://link.springer.com/article/10.1007/s10639-019-10063-9',
                  },
                  {
                        dniPerson: '',
                        provider: 'teacherContent',
                        tipo: 'image',
                        contenido: 'imagen de la clase',
                        route:'https://www.unir.net/wp-content/uploads/2024/02/La-importancia-de-la-programacion-segura-o-desarrollo-seguro-de-software.jpg'
                  },
                  {
                        dniPerson: '',
                        provider: 'teacherContent',
                        tipo: 'text',
                        contenido: 'Se recomienda observar el vídeo sobre emprendimiento social en el enlace:',
                  },
                  {
                        dniPerson: '',
                        provider: 'teacherContent',
                        tipo: 'text',
                        contenido: 'PROYECTO DESARROLLADO EN PERÚ',
                  },
                  {
                        dniPerson: '',
                        provider: 'teacherContent',
                        tipo: 'link',
                        contenido: 'https://www.youtube.com/watch?v=T4L7GMo-hQ4',
                        route:'https://www.youtube.com/watch?v=T4L7GMo-hQ4'
                  },
            ],
      });
}

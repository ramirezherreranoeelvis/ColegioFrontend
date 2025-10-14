import { Component, input, output } from '@angular/core';
import { AtomLink } from '../../../../atoms/link/link';
import { MenuExitComponent } from '../../../../molecules/menu-exit/menu-exit';
import { AtomText } from '../../../../atoms/text/text';
import { AtomLineSeparator } from '../../../../atoms/line-separator/line-separator';
import { CardContentCourse } from '../../../../molecules/cards/content-course/content-course';
import { Curso } from '../../../../../infraestructure/pages/workspace/pages/cursos/infrastructure/interfaces/course';

@Component({
      selector: 'template-course',
      imports: [AtomLink, MenuExitComponent, AtomText, AtomLineSeparator, CardContentCourse],
      templateUrl: './course.component.html',
      styleUrl: './course.scss',
})
export class TemplateCourse {
      course = input<Curso>({
            codigo: '803566102',
            nombre: 'trigonometría',
            numeroSalon: 301,
            piso: 3,
            horaInicio: '11:50:00',
            horaFin: '12:50:00',
            dia: 'VIERNES',
            profesores: ['María García', 'Carlos Rodríguez'],
            portada: 'https://ultra.content.blackboardcdn.com/ultra/static/images/default-banners/nature20_thumb.jpg',
            numeroSesiones: 30,
            contenidos: [
                  {
                        nombre: 'Historia de la Quimica',
                        numero: 1,
                        tipo: 'session',
                        recursos: [
                              {
                                    code: '1000000',
                                    nombre: 'foro',
                                    tipo: 'forum',
                                    items: [],
                                    notas: [],
                              },
                              {
                                    code: '1000001',
                                    nombre: 'contenido',
                                    tipo: 'data',
                                    items: [],
                              },
                              {
                                    code: '1000002',
                                    nombre: 'tarea',
                                    tipo: 'homework',
                                    items: [],
                                    notas: [],
                              },
                        ],
                  },
                  {
                        nombre: 'Hexenos',
                        numero: 2,
                        tipo: 'session',
                        recursos: [],
                  },
                  {
                        nombre: 'Pentenos',
                        numero: 3,
                        tipo: 'session',
                        recursos: [],
                  },
                  {
                        nombre: 'Fusiones y Mezclas',
                        numero: 4,
                        tipo: 'session',
                        recursos: [],
                  },
                  {
                        nombre: 'Fusiones y Mezclas II',
                        numero: 5,
                        tipo: 'session',
                        recursos: [],
                  },
                  {
                        nombre: 'Propiedades Generales de la Materia',
                        numero: 6,
                        tipo: 'session',
                        recursos: [],
                  },
                  {
                        nombre: 'Estados y Cambios de Estado de la Materia',
                        numero: 7,
                        tipo: 'session',
                        recursos: [],
                  },
                  {
                        nombre: 'Fenómenos Físicos y Químicos de la Materia',
                        numero: 8,
                        tipo: 'session',
                        recursos: [],
                  },
                  {
                        nombre: 'Sustancias Simples y Compuestas',
                        numero: 9,
                        tipo: 'session',
                        recursos: [],
                  },
                  {
                        nombre: 'Mezclas Homogéneas y Heterogéneas',
                        numero: 10,
                        tipo: 'session',
                        recursos: [],
                  },
                  {
                        nombre: 'Historia del Átomo',
                        numero: 11,
                        tipo: 'session',
                        recursos: [],
                  },
                  {
                        nombre: 'Número Atómico y Número de Masa',
                        numero: 12,
                        tipo: 'session',
                        recursos: [],
                  },
                  {
                        nombre: 'Anión y Catión',
                        numero: 13,
                        tipo: 'session',
                        recursos: [],
                  },
                  {
                        nombre: 'Niveles, Subniveles y Orbitales',
                        numero: 14,
                        tipo: 'session',
                        recursos: [],
                  },
                  {
                        nombre: 'Historia de la Tabla Periódica',
                        numero: 15,
                        tipo: 'session',
                        recursos: [],
                  },
                  {
                        nombre: 'Estructura de la Tabla Periódica Actual',
                        numero: 16,
                        tipo: 'session',
                        recursos: [],
                  },
                  {
                        nombre: 'Ubicación de un Elemento en la TPA',
                        numero: 17,
                        tipo: 'session',
                        recursos: [],
                  },
                  {
                        nombre: 'Número de Oxidación',
                        numero: 18,
                        tipo: 'session',
                        recursos: [],
                  },
                  {
                        nombre: 'Óxidos Básicos o Metálicos',
                        numero: 19,
                        tipo: 'session',
                        recursos: [],
                  },
                  {
                        nombre: 'Óxidos Ácidos o Anhídridos',
                        numero: 20,
                        tipo: 'session',
                        recursos: [],
                  },
            ],
      });
      rol = input<string>('');
      selectedResource = output<{
            contenido: string;
            codigo: string;
      }>();
      handleClick(event: { contenido: string; codigo: string | any }) {
            this.selectedResource.emit(event);
      }
}

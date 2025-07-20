import { RecursoContenidoCurso } from './resource-content';

export interface Curso {
      codigo: string;
      nombre: string;
      numeroSalon: number;
      piso: number;
      horaInicio: string;
      horaFin: string;
      dia: string;
      profesores: string[];
      portada: string;
      numeroSesiones: number;
      contenidos: ContenidoCurso[];
}
export interface ContenidoCurso {
      nombre: string;
      numero: number;
      tipo: 'auxiliary' | 'extra' | 'general' | 'session';
      recursos: RecursoContenidoCurso[];
}

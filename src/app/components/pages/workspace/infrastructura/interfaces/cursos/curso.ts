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
      tipo: string;
      recursos: RecursoContenidoCurso[];
}

export interface RecursoContenidoCurso {
      nombre: string;
      descripcion: string;
      tipo: string;
      items: ItemRecursoCurso[];
      notas: NotaRecursoCurso[];
}

export interface ItemRecursoCurso {
      dniPerson: string;
      tipo: string;
      contenido: string;
      nombreArchivo: string;
}

export interface NotaRecursoCurso {
      comentario: string;
      nota: number;
      fechaCalificacion: string;
}

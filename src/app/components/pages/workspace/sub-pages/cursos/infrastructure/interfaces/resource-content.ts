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

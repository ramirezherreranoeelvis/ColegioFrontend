export interface RecursoContenidoCurso {
      code:string;
      nombre: string;
      descripcion: string;
      tipo:
            | 'data'
            | 'forum'
            | 'homework'
            | 'monthly_exam'
            | 'weekly_exam'
            | 'daily_exam'
            | 'bimonthly_exam'
            | 'exam_final'
            | 'quarterly_exam';
      items: ItemRecursoCurso[];
      notas?: NotaRecursoCurso[] | NotaRecursoCurso;
}

export interface ItemRecursoCurso {
      dniPerson: string;
      tipo: 'studentContent' | 'teacherContent';
      contenido: string;
      nombreArchivo: string;
}

export interface NotaRecursoCurso {
      comentario: string;
      nota: number;
      fechaCalificacion: string;
}

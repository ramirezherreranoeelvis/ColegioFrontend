export interface RecursoContenidoCurso {
      code: string;
      nombre: string;
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
      // items: ItemRecursoCurso[];
      items: ElementResourceCourse[];
      notas?: NotaRecursoCurso[] | NotaRecursoCurso;
}

// new resource item/element
export interface ElementResourceCourse {
      dniPerson: string;
      provider: 'studentContent' | 'teacherContent';
      tipo: 'text' | 'file' | 'image' | 'link';
      contenido: string;
      route?: string;
}

export interface NotaRecursoCurso {
      comentario: string;
      nota: number;
      fechaCalificacion: string;
}

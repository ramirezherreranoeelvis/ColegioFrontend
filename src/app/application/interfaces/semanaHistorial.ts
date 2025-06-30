export interface SemanaHistorial {
      name: string;
      dias: Dia[];
}
interface Dia {
      name: string;
      entrada: Evento;
      salida: Evento;
      elementoFinal: boolean;
}
interface Evento {
      content: string;
      status: string;
}

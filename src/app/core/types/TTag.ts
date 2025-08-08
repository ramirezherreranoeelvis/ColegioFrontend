export type TTags =
      // --- Encabezados (Semánticos y de Bloque) ---
      | 'h1'
      | 'h2'
      | 'h3'
      | 'h4'
      | 'h5'
      | 'h6'

      // --- Texto de Bloque (Semánticos) ---
      | 'p' // Párrafo
      | 'figcaption' // Leyenda

      // --- Texto en Línea (Semánticos y de Contenedor) ---
      | 'span' // Contenedor genérico sin significado
      | 'label' // Etiqueta para controles
      | 'strong' // Para dar importancia fuerte al texto
      | 'em' // Para dar énfasis al texto
      | 'code' // Para fragmentos de código
      | 'q'; // Para citas cortas

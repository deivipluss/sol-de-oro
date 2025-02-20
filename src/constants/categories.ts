export const CATEGORIAS = {
    POLLOS_BRASA: 0,
    CARNES_PARRILLA: 1,
    BROASTER_SALCHIS: 2,
    PLATOS_CRIOLLOS: 3,
    SOPAS: 4,
    ENSALADAS: 5,
    DOMINGOS: 6,
    PARA_COMPARTIR: 7,
    JUGOS_FRUTAS: 8,
    GUSTITOS: 9,
    ANTICUCHOS: 10,
    PECHUGAS_PARRILLA: 11,
    TRUCHAS: 12,
    BEBIDAS: 13,
    INFUSIONES: 14
  } as const
  
  export const CATEGORIA_INFO = {
    [CATEGORIAS.POLLOS_BRASA]: {
      nombre: 'Pollos a la Brasa',
      descripcion: 'Nuestro delicioso pollo a la brasa en diferentes presentaciones',
      imagen: 'pollos-brasa'
    },
    [CATEGORIAS.CARNES_PARRILLA]: {
      nombre: 'Carnes a la Parrilla',
      descripcion: 'Jugosas carnes a la parrilla con el mejor sabor',
      imagen: 'carnes-parrilla'
    },
    [CATEGORIAS.BROASTER_SALCHIS]: {
        nombre: 'Broaster y Salchi\'s',
        descripcion: 'Pollo broaster crujiente y deliciosas salchipapas',
        imagen: 'broaster-salchis'
      },
      [CATEGORIAS.PLATOS_CRIOLLOS]: {
        nombre: 'Platos Criollos',
        descripcion: 'Variedad de platos tradicionales de la cocina peruana',
        imagen: 'platos-criollos'
      },
      [CATEGORIAS.SOPAS]: {
        nombre: 'Sopas',
        descripcion: 'Reconfortantes sopas y caldos para todos los gustos',
        imagen: 'sopas'
      },
      [CATEGORIAS.ENSALADAS]: {
        nombre: 'Ensaladas',
        descripcion: 'Frescas y saludables ensaladas para acompañar tus platos',
        imagen: 'ensaladas'
      },
      [CATEGORIAS.DOMINGOS]: {
        nombre: 'Domingos',
        descripcion: 'Especialidades disponibles los domingos',
        imagen: 'domingos'
      },
      [CATEGORIAS.PARA_COMPARTIR]: {
        nombre: 'Para Compartir',
        descripcion: 'Platos abundantes ideales para disfrutar en grupo',
        imagen: 'para-compartir'
      },
      [CATEGORIAS.JUGOS_FRUTAS]: {
        nombre: 'Jugos y Frutas',
        descripcion: 'Refrescantes jugos naturales y frutas de temporada',
        imagen: 'jugos-frutas'
      },
      [CATEGORIAS.GUSTITOS]: {
        nombre: 'Gustitos',
        descripcion: 'Deliciosas especialidades de la casa',
        imagen: 'gustitos'
      },
      [CATEGORIAS.ANTICUCHOS]: {
        nombre: 'Anticuchos',
        descripcion: 'Tradicionales anticuchos a la parrilla',
        imagen: 'anticuchos'
      },
      [CATEGORIAS.PECHUGAS_PARRILLA]: {
        nombre: 'Pechugas a la Parrilla',
        descripcion: 'Jugosas pechugas de pollo preparadas a la parrilla',
        imagen: 'pechugas-parrilla'
      },
      [CATEGORIAS.TRUCHAS]: {
        nombre: 'Truchas',
        descripcion: 'Deliciosas preparaciones con trucha fresca',
        imagen: 'truchas'
      },
      [CATEGORIAS.BEBIDAS]: {
        nombre: 'Bebidas',
        descripcion: 'Refrescantes bebidas para acompañar tu comida',
        imagen: 'bebidas'
      },
      [CATEGORIAS.INFUSIONES]: {
        nombre: 'Infusiones',
        descripcion: 'Variedad de infusiones y bebidas calientes',
        imagen: 'infusiones'
      }
  } as const
  
  export type CategoriaId = keyof typeof CATEGORIAS
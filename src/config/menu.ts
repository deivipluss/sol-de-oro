export const MENU_CONFIG = {
    // Configuración de paginación
    itemsPerPage: 12,
    
    // Opciones de ordenamiento
    sortOptions: [
      { label: 'Precio: Menor a Mayor', value: 'price_asc' },
      { label: 'Precio: Mayor a Menor', value: 'price_desc' },
      { label: 'Nombre: A-Z', value: 'name_asc' },
      { label: 'Nombre: Z-A', value: 'name_desc' },
    ],
    
    // Configuración de filtros
    filters: {
      minPrice: 0,
      maxPrice: 1000,
      categories: {
        showEmpty: false,
      }
    },
  
    // Configuración de búsqueda
    search: {
      minLength: 2,
      debounceMs: 300,
    },
  
    // Configuración de imágenes
    images: {
      thumbnail: {
        width: 200,
        height: 200,
      },
      full: {
        width: 800,
        height: 600,
      }
    },
  
    // Configuración de cache
    cache: {
      revalidate: 60, // segundos
    }
  }
  
  export type SortOption = typeof MENU_CONFIG.sortOptions[number]
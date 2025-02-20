import { PrismaClient } from '@prisma/client'
import { CATEGORIAS, CATEGORIA_INFO } from '../src/constants/categories'

const prisma = new PrismaClient()

const getImageUrl = (name: string): string => {
  return `https://res.cloudinary.com/dasjnlinj/image/upload/v1/menu/${name.toLowerCase().replace(/ /g, '-')}`
}

async function main() {
  // Crear categorías usando CATEGORIA_INFO
  const categories = await Promise.all(
    Object.values(CATEGORIA_INFO).map(categoria => 
      prisma.category.create({
        data: {
          name: categoria.nombre,
          description: categoria.descripcion,
          image: getImageUrl(categoria.imagen)
        }
      })
    )
  )

  // Crear productos usando CATEGORIAS para los índices
  await prisma.product.createMany({
    data: [
      // Pollos a la Brasa
      {
        name: "Un Pollo a la brasa",
        description: "Con papas crocantes, cremas y ensalada",
        price: 72.00,
        categoryId: categories[CATEGORIAS.POLLOS_BRASA].id,
        isAvailable: true
      },
      {
        name: "Un Pollo a la brasa para llevar",
        description: "Con papas crocantes, cremas, gaseosa de 1.5 litros y ensalada",
        price: 74.00,
        categoryId: categories[CATEGORIAS.POLLOS_BRASA].id,
        isAvailable: true
      },
      {
        name: "Un Pollo a la brasa chaufero",
        description: "Con papas crocantes, cremas, ensalada y arroz chaufa",
        price: 90.00,
        categoryId: categories[CATEGORIAS.POLLOS_BRASA].id,
        isAvailable: true
      },
      {
        name: "Un Pollo a la brasa chaufero para llevar",
        description: "Con papas crocantes, cremas, ensalada, gaseosa de 1.5 litros y arroz chaufa",
        price: 90.00,
        categoryId: categories[CATEGORIAS.POLLOS_BRASA].id,
        isAvailable: true
      },
      {
        name: "Medio pollo a la brasa",
        description: "Con papas crocantes, cremas y ensalada",
        price: 37.00,
        categoryId: categories[CATEGORIAS.POLLOS_BRASA].id,
        isAvailable: true
      },
      {
        name: "Medio pollo a la brasa para llevar",
        description: "Con papas crocantes, cremas, gaseosa de un litro y ensalada",
        price: 37.00,
        categoryId: categories[CATEGORIAS.POLLOS_BRASA].id,
        isAvailable: true
      },
      {
        name: "Un cuarto de pollo a la brasa",
        description: "Con papas crocantes, cremas y ensalada",
        price: 20.00,
        categoryId: categories[CATEGORIAS.POLLOS_BRASA].id,
        isAvailable: true
      },
      {
        name: "Un octavo de pollo a la brasa",
        description: "Con papas crocantes, cremas y ensalada",
        price: 18.00,
        categoryId: categories[CATEGORIAS.POLLOS_BRASA].id,
        isAvailable: true
      },
      {
        name: "Pollo a la brasa anticuchero",
        description: "1/4 de pollo más un palito de anticucho",
        price: 23.00,
        categoryId: categories[CATEGORIAS.POLLOS_BRASA].id,
        isAvailable: true
      },
      {
        name: "Pollo a la brasa criollo",
        description: "1/4 de pollo y un chorizo",
        price: 22.00,
        categoryId: categories[CATEGORIAS.POLLOS_BRASA].id,
        isAvailable: true
      },
      {
        name: "Pollo a la brasa a la campesina",
        description: "1/4 de pollo, papas sancochadas, choclo, queso y jamón",
        price: 24.00,
        categoryId: categories[CATEGORIAS.POLLOS_BRASA].id,
        isAvailable: true
      },
    
      // Carnes a la Parrilla
      {
        name: "Lomo Fino",
        description: "Jugoso medallón de lomo fino",
        price: 29.00,
        categoryId: categories[CATEGORIAS.CARNES_PARRILLA].id,
        isAvailable: true
      },
      {
        name: "Parrilla gaucha",
        description: "Pechuga, bistec y chuleta",
        price: 29.00,
        categoryId: categories[CATEGORIAS.CARNES_PARRILLA].id,
        isAvailable: true
      },
      {
        name: "Costillas a la barbacoa",
        description: "Dos riquísimas costillas bañadas en salsa barbacoa",
        price: 26.00,
        categoryId: categories[CATEGORIAS.CARNES_PARRILLA].id,
        isAvailable: true
      },
      {
        name: "Costillas 'Sol'",
        description: "El especial de casa: Riquísimas costillas bañadas en salsa barbacoa + 1/4 de pollo a la brasa",
        price: 29.00,
        categoryId: categories[CATEGORIAS.CARNES_PARRILLA].id,
        isAvailable: true
      },
      {
        name: "Bife",
        description: "Corte único de res a la parrilla (250g)",
        price: 26.00,
        categoryId: categories[CATEGORIAS.CARNES_PARRILLA].id,
        isAvailable: true
      },
      {
        name: "Bife Sol",
        description: "Corte único de res a la parrilla (250g) + 1/4 de pollo a la brasa",
        price: 32.00,
        categoryId: categories[CATEGORIAS.CARNES_PARRILLA].id,
        isAvailable: true
      },
      {
        name: "Chuleta",
        description: "",
        price: 22.00,
        categoryId: categories[CATEGORIAS.CARNES_PARRILLA].id,
        isAvailable: true
      },
      {
        name: "Chuletas Sol",
        description: "1/2 chuleta bañada en salsa barbacoa + 1/4 de pollo a la brasa",
        price: 26.00,
        categoryId: categories[CATEGORIAS.CARNES_PARRILLA].id,
        isAvailable: true
      },
      {
        name: "Bistec a la plancha",
        description: "",
        price: 22.00,
        categoryId: categories[CATEGORIAS.CARNES_PARRILLA].id,
        isAvailable: true
      },
      {
        name: "Bistec a la parrilla",
        description: "",
        price: 22.00,
        categoryId: categories[CATEGORIAS.CARNES_PARRILLA].id,
        isAvailable: true
      },
      {
        name: "Trucha a la Parrilla",
        description: "",
        price: 24.00,
        categoryId: categories[CATEGORIAS.CARNES_PARRILLA].id,
        isAvailable: true
      },
    
      // Broaster y Salchi's
      {
        name: "Un cuarto Pollo broaster",
        description: "Pechuga de pollo sin hueso, viene con papas crocantes, cremas y ensalada",
        price: 21.00,
        categoryId: categories[CATEGORIAS.BROASTER_SALCHIS].id,
        isAvailable: true
      },
      {
        name: "Un octavo de pollo broaster",
        description: "Pechuga de pollo sin hueso, viene con papas crocantes, cremas y ensaladas",
        price: 19.00,
        categoryId: categories[CATEGORIAS.BROASTER_SALCHIS].id,
        isAvailable: true
      },
      {
        name: "Salchipapas",
        description: "Con hot dog Frankfurt y chorizo",
        price: 18.00,
        categoryId: categories[CATEGORIAS.BROASTER_SALCHIS].id,
        isAvailable: true
      },
    
      // Platos Criollos
      {
        name: "Milanesa de pollo",
        description: "",
        price: 24.00,
        categoryId: categories[CATEGORIAS.PLATOS_CRIOLLOS].id,
        isAvailable: true
      },
      {
        name: "Chicharrón de pollo",
        description: "Con ensalada",
        price: 24.00,
        categoryId: categories[CATEGORIAS.PLATOS_CRIOLLOS].id,
        isAvailable: true
      },
      {
        name: "Bistec de carne de res",
        description: "Con salsa criolla",
        price: 23.00,
        categoryId: categories[CATEGORIAS.PLATOS_CRIOLLOS].id,
        isAvailable: true
      },
      {
        name: "Bistec apanado",
        description: "Con salsa criolla",
        price: 23.00,
        categoryId: categories[CATEGORIAS.PLATOS_CRIOLLOS].id,
        isAvailable: true
      },
      {
        name: "Bistec al jugo",
        description: "Con arroz blanco y papas fritas",
        price: 24.00,
        categoryId: categories[CATEGORIAS.PLATOS_CRIOLLOS].id,
        isAvailable: true
      },
      {
        name: "Saltado de pollo",
        description: "",
        price: 22.00,
        categoryId: categories[CATEGORIAS.PLATOS_CRIOLLOS].id,
        isAvailable: true
      },
      {
        name: "Lomo saltado",
        description: "",
        price: 22.00,
        categoryId: categories[CATEGORIAS.PLATOS_CRIOLLOS].id,
        isAvailable: true
      },
      {
        name: "Lomo saltado mixto",
        description: "Res y pollo",
        price: 23.00,
        categoryId: categories[CATEGORIAS.PLATOS_CRIOLLOS].id,
        isAvailable: true
      },
      {
        name: "Lomo saltado al jugo",
        description: "",
        price: 24.00,
        categoryId: categories[CATEGORIAS.PLATOS_CRIOLLOS].id,
        isAvailable: true
      },
      {
        name: "Arroz chaufa de carne",
        description: "",
        price: 22.00,
        categoryId: categories[CATEGORIAS.PLATOS_CRIOLLOS].id,
        isAvailable: true
      },
      {
        name: "Arroz chaufa 'Sol'",
        description: "El especial de casa: chaufa, 1/4 de pollo a la brasa",
        price: 28.00,
        categoryId: categories[CATEGORIAS.PLATOS_CRIOLLOS].id,
        isAvailable: true
      },
      {
        name: "Arroz chaufa de pollo",
        description: "",
        price: 22.00,
        categoryId: categories[CATEGORIAS.PLATOS_CRIOLLOS].id,
        isAvailable: true
      },
      {
        name: "Arroz chaufa con chancho y champiñones",
        description: "",
        price: 23.00,
        categoryId: categories[CATEGORIAS.PLATOS_CRIOLLOS].id,
        isAvailable: true
      },
      {
        name: "Arroz chaufa de dos sabores",
        description: "Pollo y carne",
        price: 23.00,
        categoryId: categories[CATEGORIAS.PLATOS_CRIOLLOS].id,
        isAvailable: true
      },
      {
        name: "Arroz chaufa tres sabores",
        description: "Pollo, carne, chancho",
        price: 24.00,
        categoryId: categories[CATEGORIAS.PLATOS_CRIOLLOS].id,
        isAvailable: true
      },
      {
        name: "Arroz chaufa tapado",
        description: "Cubierto con tortilla de piña",
        price: 26.00,
        categoryId: categories[CATEGORIAS.PLATOS_CRIOLLOS].id,
        isAvailable: true
      },
      {
        name: "Aeropuerto",
        description: "Chaufa, fideos y frijol chino",
        price: 24.00,
        categoryId: categories[CATEGORIAS.PLATOS_CRIOLLOS].id,
        isAvailable: true
      },
      {
        name: "Tallarín saltado de carne",
        description: "",
        price: 20.00,
        categoryId: categories[CATEGORIAS.PLATOS_CRIOLLOS].id,
        isAvailable: true
      },
      {
        name: "Tallarín saltado de pollo",
        description: "",
        price: 20.00,
        categoryId: categories[CATEGORIAS.PLATOS_CRIOLLOS].id,
        isAvailable: true
      },
      {
        name: "Tallarín saltado criollo",
        description: "Picante, viene con papas sancochadas",
        price: 21.00,
        categoryId: categories[CATEGORIAS.PLATOS_CRIOLLOS].id,
        isAvailable: true
      },
      {
        name: "Tallarín al pesto con bisteck de res",
        description: "",
        price: 24.00,
        categoryId: categories[CATEGORIAS.PLATOS_CRIOLLOS].id,
        isAvailable: true
      },
      {
        name: "Tallarín a lo Alfredo",
        description: "En salsa blanca con queso, crema de leche, jamón y champiñones",
        price: 23.00,
        categoryId: categories[CATEGORIAS.PLATOS_CRIOLLOS].id,
        isAvailable: true
      },
      {
        name: "Tallarín en salsa de huancaína",
        description: "Con lomo saltado y papas sancochadas",
        price: 25.00,
        categoryId: categories[CATEGORIAS.PLATOS_CRIOLLOS].id,
        isAvailable: true
      },
      {
        name: "Arroz a la cubana",
        description: "",
        price: 14.00,
        categoryId: categories[CATEGORIAS.PLATOS_CRIOLLOS].id,
        isAvailable: true
      },
      {
        name: "Tortilla de verduras",
        description: "",
        price: 17.00,
        categoryId: categories[CATEGORIAS.PLATOS_CRIOLLOS].id,
        isAvailable: true
      },
      {
        name: "Tortilla de pollo",
        description: "",
        price: 19.00,
        categoryId: categories[CATEGORIAS.PLATOS_CRIOLLOS].id,
        isAvailable: true
      },
    
      // Sopas
      {
        name: "Caldo de gallina con presa",
        description: "",
        price: 20.00,
        categoryId: categories[CATEGORIAS.SOPAS].id,
        isAvailable: true
      },
      {
        name: "Caldo de gallina sin presa",
        description: "",
        price: 17.00,
        categoryId: categories[CATEGORIAS.SOPAS].id,
        isAvailable: true
      },
      {
        name: "Sopa a la minuta",
        description: "",
        price: 18.00,
        categoryId: categories[CATEGORIAS.SOPAS].id,
        isAvailable: true
      },
      {
        name: "Sopa a la criolla",
        description: "",
        price: 20.00,
        categoryId: categories[CATEGORIAS.SOPAS].id,
        isAvailable: true
      },
      {
        name: "Sudado de trucha",
        description: "",
        price: 23.00,
        categoryId: categories[CATEGORIAS.SOPAS].id,
        isAvailable: true
      },
      {
        name: "Sustancia de pollo",
        description: "",
        price: 17.00,
        categoryId: categories[CATEGORIAS.SOPAS].id,
        isAvailable: true
      },
      {
        name: "Sustancia de carne",
        description: "",
        price: 17.00,
        categoryId: categories[CATEGORIAS.SOPAS].id,
        isAvailable: true
      },
      {
        name: "Dieta de pollo",
        description: "",
        price: 17.00,
        categoryId: categories[CATEGORIAS.SOPAS].id,
        isAvailable: true
      },
      {
        name: "Sopa de Kion",
        description: "",
        price: 17.00,
        categoryId: categories[CATEGORIAS.SOPAS].id,
        isAvailable: true
      },
    
      // Ensaladas
      {
        name: "Ensalada Mixta",
        description: "Palta, zanahoria, betarraga, tomate, pepino y vainita",
        price: 13.00,
        categoryId: categories[CATEGORIAS.ENSALADAS].id,
        isAvailable: true
      },
      {
        name: "Ensalada de palta",
        description: "Pura palta con limón",
        price: 15.00,
        categoryId: categories[CATEGORIAS.ENSALADAS].id,
        isAvailable: true
      },
      {
        name: "Delicia de palta",
        description: "Palta, zanahoria, queso, choclo y tomate",
        price: 15.00,
        categoryId: categories[CATEGORIAS.ENSALADAS].id,
        isAvailable: true
      },
      {
        name: "Ensalada 'Sol'",
        description: "El especial de casa: Palmito, espárragos, champiñones y palta",
        price: 15.00,
        categoryId: categories[CATEGORIAS.ENSALADAS].id,
        isAvailable: true
      },
    
      // Domingos
      {
        name: "Patasca",
        description: "",
        price: 20.00,
        categoryId: categories[CATEGORIAS.DOMINGOS].id,
        isAvailable: true
      },
      {
        name: "Picante de cuy",
        description: "1/2 cuy",
        price: 30.00,
        categoryId: categories[CATEGORIAS.DOMINGOS].id,
        isAvailable: true
      },
      {
        name: "Arroz con pato",
        description: "",
        price: 28.00,
        categoryId: categories[CATEGORIAS.DOMINGOS].id,
        isAvailable: true
      },
      {
        name: "Costillar",
        description: "",
        price: 26.00,
        categoryId: categories[CATEGORIAS.DOMINGOS].id,
        isAvailable: true
      },
      {
        name: "Papa a la huancaína",
        description: "",
        price: 14.00,
        categoryId: categories[CATEGORIAS.DOMINGOS].id,
        isAvailable: true
      },
    
      // Para Compartir
      {
        name: "Reloj de Campana",
        description: "Dos octavos de pollo, dos anticuchos, chicharrón de pollo, salsa tártara, alitas y muslitos crocantes, salsa de guacamole, arroz chaufa, lomo saltado, papa frita familiar, gaseosa 1.5lt solo para llevar recomendado para seis personas",
        price: 105.00,
        categoryId: categories[CATEGORIAS.PARA_COMPARTIR].id,
        isAvailable: true
      },
      {
        name: "Parrilla Familiar 'Sol'",
        description: "El especial de casa: Bife, chuleta, 1 porción de pancita, 1 porción de mollejas, dos anticuchos, 1/4 de pollo a la brasa, dos filetes de pierna, dos chorizos, dos hotdog's , papas fritas tamaño familiar, , gaseosa 1.5 litros solo para llevar, recomendado para seis personas",
        price: 95.00,
        categoryId: categories[CATEGORIAS.PARA_COMPARTIR].id,
        isAvailable: true
      },
      {
        name: "1/2 Parrilla Sol",
        description: "Bife, chuleta, 1/2 porción de pancita, 1/2 porción de mollejas, un anticucho, 1/4 de pollo a la brasa, un filete de pierna, un chorizo, un hot dog, una papas fritas de tamaño familiar, gaseosa 1 litro solo para llevar, recomendado para cuatro personas",
        price: 85.00,
        categoryId: categories[CATEGORIAS.PARA_COMPARTIR].id,
        isAvailable: true
      },
    
      // Jugos y Frutas
      {
        name: "Ensalada de frutas",
        description: "",
        price: 11.00,
        categoryId: categories[CATEGORIAS.JUGOS_FRUTAS].id,
        isAvailable: true
      },
      {
        name: "Jugo especial 1/2 litro",
        description: "",
        price: 9.00,
        categoryId: categories[CATEGORIAS.JUGOS_FRUTAS].id,
        isAvailable: true
      },
      {
        name: "Jugo surtido 1/2 litro",
        description: "",
        price: 8.00,
        categoryId: categories[CATEGORIAS.JUGOS_FRUTAS].id,
        isAvailable: true
      },
      {
        name: "Jugo de papaya 1/2 litro",
        description: "",
        price: 8.00,
        categoryId: categories[CATEGORIAS.JUGOS_FRUTAS].id,
        isAvailable: true
      },
      {
        name: "Jugo de piña 1/2 litro",
        description: "",
        price: 8.00,
        categoryId: categories[CATEGORIAS.JUGOS_FRUTAS].id,
        isAvailable: true
      },
      {
        name: "Batido de lúcuma",
        description: "",
        price: 10.00,
        categoryId: categories[CATEGORIAS.JUGOS_FRUTAS].id,
        isAvailable: true
      },
      {
        name: "Batido de plátano",
        description: "",
        price: 10.00,
        categoryId: categories[CATEGORIAS.JUGOS_FRUTAS].id,
        isAvailable: true
      },
      {
        name: "Batido de fresa",
        description: "",
        price: 10.00,
        categoryId: categories[CATEGORIAS.JUGOS_FRUTAS].id,
        isAvailable: true
      },
    
      // Gustitos
      {
        name: "Saltado de lomo fino",
        description: "",
        price: 28.00,
        categoryId: categories[CATEGORIAS.GUSTITOS].id,
        isAvailable: true
      },
      {
        name: "Mistura criolla",
        description: "Chaufa + lomo saltado o tallarín saltado",
        price: 28.00,
        categoryId: categories[CATEGORIAS.GUSTITOS].id,
        isAvailable: true
      },
      {
        name: "Ferrocarril",
        description: "Bisteck a lo pobre encebollado",
        price: 28.00,
        categoryId: categories[CATEGORIAS.GUSTITOS].id,
        isAvailable: true
      },
      {
        name: "Tallarín al pesto 'Sol'",
        description: "El especial de casa: con 1/4 de pollo a la brasa",
        price: 27.00,
        categoryId: categories[CATEGORIAS.GUSTITOS].id,
        isAvailable: true
      },
      {
        name: "Tallarín en salsa huancaína 'Sol'",
        description: "El especial de casa: con 1/4 de pollo a la brasa",
        price: 27.00,
        categoryId: categories[CATEGORIAS.GUSTITOS].id,
        isAvailable: true
      },
      {
        name: "Chicharrón de pollo sol",
        description: "Con salsa tártara y ensalada",
        price: 27.00,
        categoryId: categories[CATEGORIAS.GUSTITOS].id,
        isAvailable: true
      },
      {
        name: "Bisteck a lo pobre",
        description: "Con huevo frito, plátano, salchicha, pan tostado",
        price: 27.00,
        categoryId: categories[CATEGORIAS.GUSTITOS].id,
        isAvailable: true
      },
      {
        name: "Lomo a lo pobre",
        description: "Con huevo frito, plátano, salchicha y pan tostado",
        price: 26.00,
        categoryId: categories[CATEGORIAS.GUSTITOS].id,
        isAvailable: true
      },
      {
        name: "Pollo a la brasa a lo pobre",
        description: "Con arroz blanco, papas fritas, huevo frito, plátano, salchicha, pan tostado",
        price: 26.00,
        categoryId: categories[CATEGORIAS.GUSTITOS].id,
        isAvailable: true
      },
      {
        name: "Alitas y muslitos picantes",
        description: "Con arroz blanco, papas sancochadas y ensalada",
        price: 26.00,
        categoryId: categories[CATEGORIAS.GUSTITOS].id,
        isAvailable: true
      },
      {
        name: "Alitas y muslitos crocantes",
        description: "Con arroz blanco, papa frita, salsa guacamole y ensalada",
        price: 26.00,
        categoryId: categories[CATEGORIAS.GUSTITOS].id,
        isAvailable: true
      },
    
      // Anticuchos
      {
        name: "Anticucho 'Sol'",
        description: "El especial de casa: 2 palitos de anticucho, choclo, un chorizo, porción de mondongo",
        price: 24.00,
        categoryId: categories[CATEGORIAS.ANTICUCHOS].id,
        isAvailable: true
      },
      {
        name: "Anticucho de corazón",
        description: "Dos palitos de anticucho y choclo",
        price: 21.00,
        categoryId: categories[CATEGORIAS.ANTICUCHOS].id,
        isAvailable: true
      },
      {
        name: "Brocheta de pollo",
        description: "Dos palitos de brochetas con pimentón y cebolla",
        price: 20.00,
        categoryId: categories[CATEGORIAS.ANTICUCHOS].id,
        isAvailable: true
      },
    
      // Pechugas a la Parrilla
      {
        name: "Pechuga a la parrilla",
        description: "Filete de pechuga de pollo con papas fritas",
        price: 23.00,
        categoryId: categories[CATEGORIAS.PECHUGAS_PARRILLA].id,
        isAvailable: true
      },
      {
        name: "Pechuga Light",
        description: "Filete de pechuga de pollo, cero aceite, con papa sancochada",
        price: 24.00,
        categoryId: categories[CATEGORIAS.PECHUGAS_PARRILLA].id,
        isAvailable: true
      },
      {
        name: "Pechuga hawaiana",
        description: "Filete de pechuga de pollo relleno de jamón, queso, tocino, champiñones, piña en salsa de barbacoa y papa frita",
        price: 27.00,
        categoryId: categories[CATEGORIAS.PECHUGAS_PARRILLA].id,
        isAvailable: true
      },
      {
        name: "Pechuga 'Sol'",
        description: "El especial de casa: Filete de pechuga de pollo relleno de jamón, queso, tocino, champiñones en salsa barbacoa y papa frita",
        price: 26.00,
        categoryId: categories[CATEGORIAS.PECHUGAS_PARRILLA].id,
        isAvailable: true
      },
      {
        name: "Pechuga a la campesina",
        description: "Filete de pechuga de pollo relleno de jamón, queso, tocino, champiñones, con papas sancochadas y choclo",
        price: 27.00,
        categoryId: categories[CATEGORIAS.PECHUGAS_PARRILLA].id,
        isAvailable: true
      },
      {
        name: "Piqueo 'Sol'",
        description: "El especial de casa: 2 anticuchos, 2 brochetas, porción de molleja, porción de pancita, un chorizo, un choclo",
        price: 42.00,
        categoryId: categories[CATEGORIAS.PECHUGAS_PARRILLA].id,
        isAvailable: true
      },
      {
        name: "1/2 pollo deshuesado",
        description: "Dos jugosos filetes de pierna",
        price: 28.00,
        categoryId: categories[CATEGORIAS.PECHUGAS_PARRILLA].id,
        isAvailable: true
      },
      {
        name: "Pechuga al ajo",
        description: "Filete de pechuga de pollo en salsa de ajo",
        price: 24.00,
        categoryId: categories[CATEGORIAS.PECHUGAS_PARRILLA].id,
        isAvailable: true
      },
      {
        name: "Pechuga al limón",
        description: "En aliño de limón",
        price: 24.00,
        categoryId: categories[CATEGORIAS.PECHUGAS_PARRILLA].id,
        isAvailable: true
      },
      {
        name: "Pechuga a la pizzarola",
        description: "Filete de pechuga de pollo, queso mozarela, champiñones, salchicha y pimentón",
        price: 27.00,
        categoryId: categories[CATEGORIAS.PECHUGAS_PARRILLA].id,
        isAvailable: true
      },
      {
        name: "Mollejas a la parrilla",
        description: "",
        price: 22.00,
        categoryId: categories[CATEGORIAS.PECHUGAS_PARRILLA].id,
        isAvailable: true
      },
    
      // Truchas
      {
        name: "Chicharrón de trucha",
        description: "Con salsa criolla",
        price: 24.00,
        categoryId: categories[CATEGORIAS.TRUCHAS].id,
        isAvailable: true
      },
      {
        name: "Trucha broaster",
        description: "",
        price: 22.00,
        categoryId: categories[CATEGORIAS.TRUCHAS].id,
        isAvailable: true
      },
      {
        name: "Trucha frita",
        description: "Con salsa criolla",
        price: 22.00,
        categoryId: categories[CATEGORIAS.TRUCHAS].id,
        isAvailable: true
      },
      {
        name: "Trucha en salsa de champiñones",
        description: "",
        price: 24.00,
        categoryId: categories[CATEGORIAS.TRUCHAS].id,
        isAvailable: true
      },
      {
        name: "Milanesa de trucha",
        description: "",
        price: 23.00,
        categoryId: categories[CATEGORIAS.TRUCHAS].id,
        isAvailable: true
      },
      {
        name: "Trucha a la parrilla",
        description: "",
        price: 24.00,
        categoryId: categories[CATEGORIAS.TRUCHAS].id,
        isAvailable: true
      },
    
      // Bebidas
      {
        name: "Chicha morada un litro",
        description: "",
        price: 13.00,
        categoryId: categories[CATEGORIAS.BEBIDAS].id,
        isAvailable: true
      },
      {
        name: "Chicha morada medio litro",
        description: "",
        price: 7.00,
        categoryId: categories[CATEGORIAS.BEBIDAS].id,
        isAvailable: true
      },
      {
        name: "Maracuyá un litro",
        description: "",
        price: 13.00,
        categoryId: categories[CATEGORIAS.BEBIDAS].id,
        isAvailable: true
      },
      {
        name: "Maracuyá medio litro",
        description: "",
        price: 7.00,
        categoryId: categories[CATEGORIAS.BEBIDAS].id,
        isAvailable: true
      },
      {
        name: "Limonada un litro",
        description: "",
        price: 13.00,
        categoryId: categories[CATEGORIAS.BEBIDAS].id,
        isAvailable: true
      },
      {
        name: "Limonada medio litro",
        description: "",
        price: 7.00,
        categoryId: categories[CATEGORIAS.BEBIDAS].id,
        isAvailable: true
      },
    
      // Infusiones
      {
        name: "Flor de jamaica",
        description: "",
        price: 11.00,
        categoryId: categories[CATEGORIAS.INFUSIONES].id,
        isAvailable: true
      },
      {
        name: "Hoja de coca",
        description: "",
        price: 11.00,
        categoryId: categories[CATEGORIAS.INFUSIONES].id,
        isAvailable: true
      },
      {
        name: "Emoliente",
        description: "",
        price: 11.00,
        categoryId: categories[CATEGORIAS.INFUSIONES].id,
        isAvailable: true
      },
      {
        name: "Boldo",
        description: "",
        price: 11.00,
        categoryId: categories[CATEGORIAS.INFUSIONES].id,
        isAvailable: true
      },
      {
        name: "Muña",
        description: "",
        price: 11.00,
        categoryId: categories[CATEGORIAS.INFUSIONES].id,
        isAvailable: true
      },
      {
        name: "Menta",
        description: "",
        price: 11.00,
        categoryId: categories[CATEGORIAS.INFUSIONES].id,
        isAvailable: true
      },
      {
        name: "Anís",
        description: "",
        price: 4.00,
        categoryId: categories[CATEGORIAS.INFUSIONES].id,
        isAvailable: true
      },
      {
        name: "Manzanilla",
        description: "",
        price: 4.00,
        categoryId: categories[CATEGORIAS.INFUSIONES].id,
        isAvailable: true
      },
      {
        name: "Café",
        description: "",
        price: 4.00,
        categoryId: categories[CATEGORIAS.INFUSIONES].id,
        isAvailable: true
      },
      {
        name: "Té",
        description: "",
        price: 4.00,
        categoryId: categories[CATEGORIAS.INFUSIONES].id,
        isAvailable: true
      }
      
    ]
  })

  // Crear imágenes para los productos
  const products = await prisma.product.findMany()
  
  await Promise.all(
    products.map(product => 
      prisma.productImage.create({
        data: {
          url: getImageUrl(product.name),
          productId: product.id
        }
      })
    )
  )

  console.log(`✅ Seed completado:`)
  console.log(`- ${categories.length} categorías creadas`)
  console.log(`- ${products.length} productos creados con imágenes`)
}

main()
  .catch((e) => {
    console.error('❌ Error en seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
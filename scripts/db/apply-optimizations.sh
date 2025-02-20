#!/bin/bash

# Configuración de la base de datos
DB_URL="postgres://admin2025:npg_KQxd5PvJI2iH@ep-nameless-dream-a8y4xzqs.eastus2.azure.neon.tech/bdrestaurante2025?sslmode=require&options=endpoint%3Dep-nameless-dream-a8y4xzqs"

echo "🚀 Iniciando proceso de optimizaciones..."

# Aplicar optimizaciones
echo "Aplicando optimizaciones SQL..."
PGPASSWORD=npg_KQxd5PvJI2iH psql "$DB_URL" -f prisma/sql/optimizations/01_indexes.sql

# Verificar índices
echo "📊 Verificando índices creados..."
PGPASSWORD=npg_KQxd5PvJI2iH psql "$DB_URL" -c "\di"

echo "✨ Proceso de optimizaciones completado!"
#!/bin/bash

# Rutas a verificar
PATHS=(
  "public/images/hero/hero-background.jpg"
  "public/images/hero/about-hero.jpg"
  "public/images/specialties/pollo-brasa.jpg"
  "public/images/specialties/parrillada.jpg"
  "public/images/specialties/criolla.jpg"
  "public/images/categories/pollos.jpg"
  "public/images/categories/parrillas.jpg"
  "public/images/categories/criollos.jpg"
  "public/images/categories/bebidas.jpg"
  "public/images/ui/logo.png"
)

echo "Verificando imágenes requeridas..."
MISSING=0

for path in "${PATHS[@]}"; do
  if [ -f "$path" ]; then
    echo "✓ $path existe"
  else
    echo "✗ $path NO EXISTE"
    MISSING=$((MISSING+1))
  fi
done

echo ""
if [ $MISSING -eq 0 ]; then
  echo "Todas las imágenes existen! 🎉"
else
  echo "$MISSING imágenes no se encontraron. Por favor, coloca las imágenes en las rutas especificadas."
fi

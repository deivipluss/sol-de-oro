#!/bin/bash

echo "Aplicando schema SQL..."

PGPASSWORD=npg_KQxd5PvJI2iH psql \
  "postgres://admin2025:npg_KQxd5PvJI2iH@ep-nameless-dream-a8y4xzqs.eastus2.azure.neon.tech/bdrestaurante2025?sslmode=require&options=endpoint%3Dep-nameless-dream-a8y4xzqs" \
  -f prisma/sql/schema.sql

echo "Schema aplicado exitosamente!"
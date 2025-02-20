-- Optimizaciones para búsqueda de productos
CREATE INDEX IF NOT EXISTS idx_products_name 
ON "Product" USING GIN (to_tsvector('spanish', name));

-- Optimizaciones para búsqueda de categorías
CREATE INDEX IF NOT EXISTS idx_categories_name 
ON "Category" USING GIN (to_tsvector('spanish', name));

-- Índice compuesto para productos disponibles por precio
CREATE INDEX IF NOT EXISTS idx_products_available_price 
ON "Product" (price) 
WHERE "isAvailable" = true;

-- Índice para búsquedas por estado de orden
CREATE INDEX IF NOT EXISTS idx_orders_status 
ON "Order" (status);

-- Índice para búsquedas por fecha de creación
CREATE INDEX IF NOT EXISTS idx_orders_created 
ON "Order" (createdAt DESC);
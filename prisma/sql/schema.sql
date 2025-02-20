-- Tabla de Categorías
CREATE TABLE IF NOT EXISTS "Category" (
  id TEXT PRIMARY KEY,
  name VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  image TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL
);

-- Tabla de Productos
CREATE TABLE IF NOT EXISTS "Product" (
  id TEXT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  "categoryId" TEXT NOT NULL REFERENCES "Category"(id),
  "isAvailable" BOOLEAN NOT NULL DEFAULT true,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL
);

-- Tabla de Imágenes de Productos
CREATE TABLE IF NOT EXISTS "ProductImage" (
  id TEXT PRIMARY KEY,
  url TEXT NOT NULL,
  "productId" TEXT NOT NULL REFERENCES "Product"(id) ON DELETE CASCADE,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Órdenes
CREATE TABLE IF NOT EXISTS "Order" (
  id TEXT PRIMARY KEY,
  "customerName" VARCHAR(255) NOT NULL,
  "customerEmail" VARCHAR(255),
  whatsapp VARCHAR(20) NOT NULL,
  total DECIMAL(10,2) NOT NULL,
  status TEXT NOT NULL DEFAULT 'PENDING',
  "paymentProof" TEXT,
  notes TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL
);

-- Tabla de Items de Orden
CREATE TABLE IF NOT EXISTS "OrderItem" (
  id TEXT PRIMARY KEY,
  "orderId" TEXT NOT NULL REFERENCES "Order"(id) ON DELETE CASCADE,
  "productId" TEXT NOT NULL REFERENCES "Product"(id),
  quantity INTEGER NOT NULL CHECK (quantity > 0),
  price DECIMAL(10,2) NOT NULL,
  name VARCHAR(255) NOT NULL
);

-- Enum para Status de Orden
CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'CONFIRMED', 'PREPARING', 'READY', 'DELIVERED', 'CANCELLED');

-- Índices
CREATE INDEX IF NOT EXISTS idx_product_category ON "Product"("categoryId");
CREATE INDEX IF NOT EXISTS idx_product_name ON "Product"(name);
CREATE INDEX IF NOT EXISTS idx_product_price ON "Product"(price);
CREATE INDEX IF NOT EXISTS idx_order_status ON "Order"(status);
CREATE INDEX IF NOT EXISTS idx_order_created ON "Order"("createdAt" DESC);
CREATE INDEX IF NOT EXISTS idx_orderitem_order ON "OrderItem"("orderId");
CREATE INDEX IF NOT EXISTS idx_orderitem_product ON "OrderItem"("productId");

-- Índices de búsqueda de texto completo
CREATE INDEX IF NOT EXISTS idx_product_name_search ON "Product" USING GIN (to_tsvector('spanish', name));
CREATE INDEX IF NOT EXISTS idx_category_name_search ON "Category" USING GIN (to_tsvector('spanish', name));
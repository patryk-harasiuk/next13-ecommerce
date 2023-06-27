-- CreateEnum
CREATE TYPE "Category" AS ENUM ('tshirt', 'knitwear', 'shoes', 'jeans');

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "category" "Category" NOT NULL DEFAULT 'tshirt',
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

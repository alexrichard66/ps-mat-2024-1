-- CreateTable
CREATE TABLE "Car" (
    "id" SERIAL NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "year_manufacture" INTEGER NOT NULL,
    "imported" BOOLEAN NOT NULL DEFAULT false,
    "plates" TEXT NOT NULL,
    "selling_date" TIMESTAMP(3),
    "selling_price" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

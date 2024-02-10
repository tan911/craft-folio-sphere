/*
  Warnings:

  - You are about to alter the column `address` on the `Contact` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(45)`.
  - You are about to alter the column `email` on the `Contact` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `phone` on the `Contact` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(15)`.
  - You are about to alter the column `email` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.

*/
-- AlterTable
ALTER TABLE "About" ALTER COLUMN "title" SET DATA TYPE VARCHAR(50);

-- AlterTable
ALTER TABLE "Contact" ALTER COLUMN "address" SET DATA TYPE VARCHAR(45),
ALTER COLUMN "email" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "phone" SET DATA TYPE VARCHAR(15);

-- AlterTable
ALTER TABLE "Profile" ALTER COLUMN "firstName" SET DATA TYPE VARCHAR(45),
ALTER COLUMN "lastName" SET DATA TYPE VARCHAR(45);

-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "name" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "description" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "email" SET DATA TYPE VARCHAR(50);

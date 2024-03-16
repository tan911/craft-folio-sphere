/*
  Warnings:

  - The `teck_stack` column on the `Project` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "image" SET DATA TYPE TEXT,
DROP COLUMN "teck_stack",
ADD COLUMN     "teck_stack" TEXT[];

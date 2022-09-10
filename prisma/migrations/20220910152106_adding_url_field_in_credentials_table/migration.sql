/*
  Warnings:

  - You are about to drop the column `credentialName` on the `credentials` table. All the data in the column will be lost.
  - You are about to drop the column `credentialPassword` on the `credentials` table. All the data in the column will be lost.
  - You are about to drop the column `credentialTitle` on the `credentials` table. All the data in the column will be lost.
  - Added the required column `name` to the `credentials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `credentials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `credentials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `credentials` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "credentials" DROP COLUMN "credentialName",
DROP COLUMN "credentialPassword",
DROP COLUMN "credentialTitle",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;

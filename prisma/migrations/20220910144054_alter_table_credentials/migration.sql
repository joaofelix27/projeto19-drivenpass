/*
  Warnings:

  - You are about to drop the column `password` on the `credentials` table. All the data in the column will be lost.
  - You are about to drop the column `userName` on the `credentials` table. All the data in the column will be lost.
  - Added the required column `credentialName` to the `credentials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `credentialPassword` to the `credentials` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "credentials" DROP COLUMN "password",
DROP COLUMN "userName",
ADD COLUMN     "credentialName" TEXT NOT NULL,
ADD COLUMN     "credentialPassword" TEXT NOT NULL;

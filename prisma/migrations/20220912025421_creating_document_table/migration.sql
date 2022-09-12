-- CreateEnum
CREATE TYPE "documentType" AS ENUM ('CNH', 'RG');

-- CreateTable
CREATE TABLE "documents" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "fullName" TEXT NOT NULL,
    "registerNumber" TEXT NOT NULL,
    "issueDate" TEXT NOT NULL,
    "expirationDate" TEXT NOT NULL,
    "issuingOrganization" TEXT NOT NULL,
    "type" "documentType" NOT NULL,

    CONSTRAINT "documents_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

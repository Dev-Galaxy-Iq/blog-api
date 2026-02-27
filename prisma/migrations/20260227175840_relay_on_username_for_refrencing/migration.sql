/*
  Warnings:

  - You are about to drop the column `authorId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `UserComment` table. All the data in the column will be lost.
  - Added the required column `authorusername` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `UserComment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropForeignKey
ALTER TABLE "UserComment" DROP CONSTRAINT "UserComment_userId_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "authorId",
ADD COLUMN     "authorusername" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "UserComment" DROP COLUMN "userId",
ADD COLUMN     "username" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "UserComment" ADD CONSTRAINT "UserComment_username_fkey" FOREIGN KEY ("username") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorusername_fkey" FOREIGN KEY ("authorusername") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

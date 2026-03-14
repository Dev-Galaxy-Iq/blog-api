-- DropForeignKey
ALTER TABLE "UserComment" DROP CONSTRAINT "UserComment_postId_fkey";

-- AddForeignKey
ALTER TABLE "UserComment" ADD CONSTRAINT "UserComment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

import { db } from "../../../lib/db";
import { ApiError } from "../../../lib/global-error";
import { ApiResponse } from "../../../lib/global-response";
import { updatePostBodySchemaType, updatePostParamsSchemaType } from "./model";

export const updatePostSerivce = async (params: updatePostParamsSchemaType, body: updatePostBodySchemaType, userId: string | undefined) => {

  const post = await db.post.findFirst({
    where: {
      id: params.postId
    }
  })

  if (!post?.id) throw new ApiError("This Post doesn't Exist!", 404);
  if (post.authorId !== userId) throw new ApiError("unauthorized", 403);

  const updatedPost = await db.post.update({
    where: {
      id: post.id
    }, data: body
  })

  return ApiResponse({
    ...updatedPost,
    createdAt: updatedPost.createdAt.toISOString(),
    updatedAt: updatedPost.updatedAt.toISOString(),
  })
}

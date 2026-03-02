import { db } from "../../../lib/db";
import { ApiError } from "../../../lib/global-error";
import { ApiResponse } from "../../../lib/global-response";
import { addCommentBodySchemaType, addCommentParamsSchemaType } from "./model";

export const addCommentSerivce = async (params: addCommentParamsSchemaType, body: addCommentBodySchemaType, userId: string | undefined) => {
  if (!userId) throw new ApiError("not autherized", 500)

  // check if the post exists
  const post = await db.post.findFirst({
    where: {
      id: params.postId
    }
  })

  if (!post?.id) throw new ApiError("This post doesn't exists.", 403)


  // now add the comment 
  const newComment = await db.userComment.create({
    data: {
      postId: post.id,
      message: body.content,
      userId: userId
    }
  })

  if (!newComment.id) throw new ApiError("Server side issue while creating a new comment", 500)

  return ApiResponse(newComment)
}

import { db } from "../../../lib/db";
import { ApiError } from "../../../lib/global-error";
import { ApiResponse } from "../../../lib/global-response";
import { listCommentsParamsSchemaTypes } from "./model";

export const listCommentsService = async (params: listCommentsParamsSchemaTypes) => {

  // check if the post exists
  const post = await db.post.findFirst({
    where: {
      id: params.postId
    }
  })

  if (!post?.id) throw new ApiError("this post doesnt exists", 404)

  // list comments of the post
  const comments = await db.userComment.findMany({
    where: {
      postId: post.id
    }
  })


  return ApiResponse(comments)


}

import { db } from "../../../lib/db";
import { ApiError } from "../../../lib/global-error";
import { ApiResponse } from "../../../lib/global-response";
import { listCommentsParamsSchemaTypes } from "./model";

export const listCommentsService = async (params: listCommentsParamsSchemaTypes) => {

  // make sure eathier userid or postid is given, one of them should be there
  if (!params.userId && !params.postId) throw new ApiError("eathier postid or userid is required, provide one of them and try again.", 422)

  // check if the post exists
  const post = await db.post.findFirst({
    where: {
      id: params.postId,
      authorId: params.userId
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

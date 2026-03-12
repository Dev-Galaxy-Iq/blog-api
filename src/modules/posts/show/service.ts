import { db } from "../../../lib/db"
import { ApiError } from "../../../lib/global-error"
import { ApiResponse } from "../../../lib/global-response"
import { showPostParamsSchemaType } from "./model"

export const showPostService = async (params: showPostParamsSchemaType) => {
  const post = await db.post.findFirst({
    where: {
      id: params.postId
    }
  })



  if (!post?.id) throw new ApiError("this post doesnt exits", 401)

  return ApiResponse({
    ...post,
    createdAt: post.createdAt.toISOString(),
    updatedAt: post.updatedAt.toISOString(),
  })
}

import { db } from "../../../lib/db";
import { ApiError } from "../../../lib/global-error";
import { ApiResponse } from "../../../lib/global-response";
import { removePostParamsSchemaType } from "./model";

export const removePostService = async (params: removePostParamsSchemaType, userId: string | undefined) => {

  // check if the post exists 
  const post = await db.post.findFirst({
    where: {
      id: params.postId
    }
  })

  if (!post?.id) throw new ApiError("post not found", 401)


  // now check if user can remove this post
  if (post.authorId !== userId) throw new ApiError("You can't remove this post", 403)


  const removing = await db.post.delete({
    where: {
      id: post.id
    }
  })

  if (removing.id) throw new ApiError("error while trying to remove the post", 500)

  return ApiResponse(removing)
}

import { db } from "../../../lib/db";
import { ApiError } from "../../../lib/global-error";
import { ApiResponse } from "../../../lib/global-response";
import { removeCommentParamsSchemaType } from "./model";

export const removeCommentService = async (params: removeCommentParamsSchemaType, userId: string | undefined) => {
  if (!userId) throw new ApiError("user not found", 403)

  // check if the comment exists
  const comment = await db.userComment.findFirst({
    where: {
      id: params.commentId
    }
  })

  if (!comment?.id) throw new ApiError("This comment doens't exists.", 404)

  const removedComment = await db.userComment.delete({
    where: {
      id: comment.id
    }
  })


  if (!removedComment.id) throw new ApiError("error while creating comment", 500)

  return ApiResponse(removedComment)

}

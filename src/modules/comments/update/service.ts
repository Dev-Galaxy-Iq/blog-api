import { db } from "../../../lib/db";
import { ApiError } from "../../../lib/global-error";
import { ApiResponse } from "../../../lib/global-response";
import { updateCommentBodySchemaType, updateCommentParamsSchemaType } from "./model";

export const updateCommentService = async (params: updateCommentParamsSchemaType, body: updateCommentBodySchemaType, userId: string | undefined) => {
  if (!userId) throw new ApiError("unautherized", 403)

  // check if the comment exists
  const comment = await db.userComment.findFirst({
    where: {
      id: params.commentId
    }
  })

  if (!comment?.id) throw new ApiError("this comment doenst exists", 404)

  // check if the user allowed to do the update
  if (userId !== comment.userId) throw new ApiError("youre not allowed to do this action", 403)


  // now update can happen
  const updatedcomment = await db.userComment.update({
    where: {
      id: comment.id
    },
    data: body
  })

  return ApiResponse(updatedcomment)
}

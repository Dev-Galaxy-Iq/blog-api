import { db } from "../../../lib/db";
import { ApiError } from "../../../lib/global-error";
import { ApiResponse } from "../../../lib/global-response";
import { showPostParamsSchemaType } from "../../posts/show/model";
import { showCommentParamsSchemaType } from "./model";

export const showCommentService = async (params: showCommentParamsSchemaType) => {
  // check if the comment exists
  const comment = await db.userComment.findFirst({
    where: {
      id: params.commentId
    }
  })

  if (!comment?.id) throw new ApiError("this comment doenst exists", 404)


  return ApiResponse(comment)
} 

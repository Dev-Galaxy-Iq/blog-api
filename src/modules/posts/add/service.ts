import { db } from "../../../lib/db";
import { ApiError } from "../../../lib/global-error";
import { ApiResponse } from "../../../lib/global-response";
import { addPostBodySchemaTypes } from "./model";

export const addPostService = async (data: addPostBodySchemaTypes, userId: string | undefined) => {

  // make sure if userId exists
  if (!userId) throw new ApiError("missing userId", 401)

  const post = await db.post.create({
    data: {
      ...data, authorId: userId
    }
  })

  if (!post.id) throw new ApiError("issue while creating post", 500)

  return ApiResponse(post)

}

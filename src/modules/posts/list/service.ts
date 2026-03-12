import { db } from "../../../lib/db";
import { ApiResponse } from "../../../lib/global-response";
import { listPostsQueryParamsType } from "./model";

export const listPostsService = async (params: listPostsQueryParamsType) => {
  const posts = await db.post.findMany({
    skip: (params.page - 1) * params.size,
    take: params.size,
    where: {
      authorId: params.userId
    },
    orderBy: {
      createdAt: 'asc'
    }
  })

  return ApiResponse(posts)
}

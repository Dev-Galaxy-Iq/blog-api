import { db } from "../../../lib/db";
import { ApiResponse } from "../../../lib/global-response";
import { showUserParamsSchemaType } from "./model";

export const showUserService = async (params: showUserParamsSchemaType) => {
  const user = await db.user.findFirst({
    where: {
      id: params.userId
    },
    include: {
      _count: {
        select: {
          comments: true,
          posts: true
        }
      }
    }
  })


  return ApiResponse({
    ...user,
    password: undefined
  })
}

import Elysia from "elysia";
import { removeCommentService } from "./service";
import { removeCommentParamsSchema, removeCommentResSchema } from "./model";
import { auth_plugin } from "../../../plugins/auth-plugin";
import { ResponseSchema } from "../../../lib/global-response";
import { CommonErrors } from "../../../lib/global-error";

export const removeCommentRoute = new Elysia({
  detail: {
    summary: "remove",
    operationId: "removeComment"
  }
})
  .use(auth_plugin)
  .delete("/:commentId", ({ params, user }) => {
    return removeCommentService(params, user.id)
  }, {
    params: removeCommentParamsSchema,
    response: {
      200: ResponseSchema(removeCommentResSchema),
      ...CommonErrors
    }
  })

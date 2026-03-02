import Elysia from "elysia";
import { updateCommentBodySchema, updateCommentParamsSchema, updateCommentResSchema } from "./model";
import { auth_plugin } from "../../../plugins/auth-plugin";
import { updateCommentService } from "./service";
import { ResponseSchema } from "../../../lib/global-response";
import { CommonErrors } from "../../../lib/global-error";

export const updateCommentRoute = new Elysia({
  detail: {
    summary: "update"
  }
})
  .use(auth_plugin)
  .patch("/:commentId", ({ params, body, user }) => {
    return updateCommentService(params, body, user.id)
  }, {
    params: updateCommentParamsSchema,
    body: updateCommentBodySchema,
    response: {
      200: ResponseSchema(updateCommentResSchema),
      ...CommonErrors
    }
  })

import Elysia from "elysia";
import { updateCommentBodySchema, updateCommentParamsSchema } from "./model";
import { auth_plugin } from "../../../plugins/auth-plugin";
import { updateCommentService } from "./service";

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
    body: updateCommentBodySchema
  })

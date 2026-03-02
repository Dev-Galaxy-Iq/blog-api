import Elysia from "elysia";
import { removeCommentService } from "./service";
import { removeCommentParamsSchema } from "./model";
import { auth_plugin } from "../../../plugins/auth-plugin";

export const removeCommentRoute = new Elysia({
  detail: {
    summary: "remove"
  }
})
  .use(auth_plugin)
  .delete("/:commentId", ({ params, user }) => {
    return removeCommentService(params, user.id)
  }, {
    params: removeCommentParamsSchema
  })

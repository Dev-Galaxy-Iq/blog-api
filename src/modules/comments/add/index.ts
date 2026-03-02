import Elysia from "elysia";
import { addCommentSerivce } from "./service";
import { auth_plugin } from "../../../plugins/auth-plugin";
import { addCommentBodySchema, addCommentParamsSchema } from "./model";

export const addCommentRoute = new Elysia({
  detail: {
    summary: "add"
  }
}).use(auth_plugin)
  .post("/:postId", async ({ body, params, user }) => {
    return addCommentSerivce(params, body, user.id)
  }, {
    params: addCommentParamsSchema,
    body: addCommentBodySchema
  })

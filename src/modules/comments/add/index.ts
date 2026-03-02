import Elysia from "elysia";
import { addCommentBodySchema, addCommentParamsSchema } from "../update/model";
import { addCommentSerivce } from "./service";
import { auth_plugin } from "../../../plugins/auth-plugin";

export const addCommentRoute = new Elysia({
  detail: {
    summary: "add"
  }
}).use(auth_plugin)
  .post("/:postId", async ({ body, params, user }) => {
    return addCommentSerivce(params, body, user.id)
  }, {
    query: addCommentParamsSchema,
    body: addCommentBodySchema
  })

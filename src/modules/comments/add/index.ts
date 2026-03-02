import Elysia from "elysia";
import { addCommentSerivce } from "./service";
import { auth_plugin } from "../../../plugins/auth-plugin";
import { addCommentBodySchema, addCommentParamsSchema, addCommentResSchema } from "./model";
import { ResponseSchema } from "../../../lib/global-response";
import { CommonErrors } from "../../../lib/global-error";

export const addCommentRoute = new Elysia({
  detail: {
    summary: "add",
    operationId: "addComment",
    description: "add new commnet for this post"
  }
}).use(auth_plugin)
  .post("/:postId", async ({ body, params, user }) => {
    return addCommentSerivce(params, body, user.id)
  }, {
    params: addCommentParamsSchema,
    body: addCommentBodySchema,
    response: {
      200: ResponseSchema(addCommentResSchema),
      ...CommonErrors
    }
  })

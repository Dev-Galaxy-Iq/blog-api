import Elysia from "elysia";
import { updatePostBodySchema, updatePostParamsSchema, updatePostResSchema } from "./model";
import { updatePostSerivce } from "./service";
import { auth_plugin } from "../../../plugins/auth-plugin";
import { ResponseSchema } from "../../../lib/global-response";
import { CommonErrors } from "../../../lib/global-error";

export const postsUpdateEndpoint = new Elysia({
  detail: {
    summary: "update",
    description: "update post",
    operationId: "updatePost"
  }
}).use(auth_plugin).patch('/:postId', ({ params, body, user }) => {
  return updatePostSerivce(params, body, user.id);
}, {
  params: updatePostParamsSchema, body: updatePostBodySchema, response: {
    200: ResponseSchema(updatePostResSchema),
    ...CommonErrors
  }
})

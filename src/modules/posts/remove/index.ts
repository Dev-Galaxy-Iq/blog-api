import Elysia from "elysia";
import { auth_plugin } from "../../../plugins/auth-plugin";
import { removePostParamsSchema, removePostResSchema } from "./model";
import { removePostService } from "./service";
import { ResponseSchema } from "../../../lib/global-response";
import { CommonErrors } from "../../../lib/global-error";

export const postsRemoveEndpoint = new Elysia({
  detail: {
    summary: "remove",
    description: "remove post",
    operationId: "removePost"
  }
})
  .use(auth_plugin)
  .delete("/:postId", ({ user, params }) => {
    return removePostService(params, user.id)
  }, {
    params: removePostParamsSchema,
    response: {
      200: ResponseSchema(removePostResSchema),
      ...CommonErrors
    }
  })

import Elysia from "elysia";
import { addPostBodySchema, addPostResSchema } from "./model";
import { addPostService } from "./service";
import { auth_plugin } from "../../../plugins/auth-plugin";
import { ResponseSchema } from "../../../lib/global-response";
import { CommonErrors } from "../../../lib/global-error";

export const postsAddEndpoint = new Elysia({
  detail: {
    summary: "add",
    description: "add new post",
    operationId: "addPost"
  }
})
  .use(auth_plugin)
  .post("/add", ({ body, user }) => {
    return addPostService(body, user.id)
  }, {
    body: addPostBodySchema,
    response: {
      200: ResponseSchema(addPostResSchema),
      ...CommonErrors
    }
  })

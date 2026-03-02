import Elysia from "elysia";
import { showPostParamsSchema, showPostResSchema } from "./model";
import { showPostService } from "./service";
import { ResponseSchema } from "../../../lib/global-response";
import { CommonErrors } from "../../../lib/global-error";

export const postsShowEndpoint = new Elysia({
  detail: {
    summary: "show",
    description: "show post",
    operationId: "showPost"
  }
})
  .get("/:postId", ({ params }) => {
    return showPostService(params)
  }, {
    params: showPostParamsSchema,
    response: {
      200: ResponseSchema(showPostResSchema),
      ...CommonErrors
    }
  })

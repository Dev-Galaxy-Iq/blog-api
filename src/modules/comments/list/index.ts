import Elysia from "elysia";
import { listCommentsParamsSchema, listCommentsResSchema } from "./model";
import { listCommentsService } from "./service";
import { CommonErrors } from "../../../lib/global-error";
import { ResponseSchema } from "../../../lib/global-response";

export const listCommentsRoute = new Elysia({
  detail: {
    summary: "list",
    description: 'list comments of a post',
    operationId: "listComments"
  }
})
  .get("/:postId", ({ params }) => {
    return listCommentsService(params)
  }, {
    params: listCommentsParamsSchema,
    response: {
      200: ResponseSchema(listCommentsResSchema),
      ...CommonErrors
    }
  })



import Elysia from "elysia";
import { showCommentParamsSchema, showCommentResSchema } from "./model";
import { showCommentService } from "./service";
import { ResponseSchema } from "../../../lib/global-response";
import { CommonErrors } from "../../../lib/global-error";

export const showCommentRoute = new Elysia({
  detail: {
    summary: "show"
  }
})
  .get("/show/:commentId", ({ params }) => {
    return showCommentService(params)
  }, {
    params: showCommentParamsSchema,
    response: {
      200: ResponseSchema(showCommentResSchema),
      ...CommonErrors
    }
  })

import Elysia from "elysia";
import { showCommentParamsSchema } from "./model";
import { showCommentService } from "./service";

export const showCommentRoute = new Elysia({
  detail: {
    summary: "show"
  }
})
  .get("/show/:commentId", ({ params }) => {
    return showCommentService(params)
  }, {
    params: showCommentParamsSchema
  })

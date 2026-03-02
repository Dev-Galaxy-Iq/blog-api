import Elysia from "elysia";
import { listCommentsParamsSchema } from "./model";
import { listCommentsService } from "./service";

export const listCommentsRoute = new Elysia({
  detail: {
    summary: "list",
    description: 'list comments of a post'
  }
})
  .get("/:postId", ({ params }) => {
    return listCommentsService(params)
  }, {
    params: listCommentsParamsSchema
  })



import Elysia from "elysia";
import { showPostParamsSchema } from "./model";
import { showPostService } from "./service";

export const postsShowEndpoint = new Elysia({
  detail: {
    summary: "show"
  }
})
  .get("/:postId", ({ params }) => {
    return showPostService(params)
  }, {
    params: showPostParamsSchema
  })

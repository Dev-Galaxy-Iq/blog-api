import Elysia from "elysia";
import { showPostParamsSchema } from "./model";
import { showPostService } from "./service";

export const postsShowEndpoint = new Elysia({
  detail: {
    summary: "show post details"
  }
})

  .get("/:postId", ({ params }) => {
    return showPostService(params)
  }, {
    params: showPostParamsSchema
  })

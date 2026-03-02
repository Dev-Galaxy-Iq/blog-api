import Elysia from "elysia";
import { addCommentRoute } from "./add";
import { listCommentsRoute } from "./list";
import { removeCommentRoute } from "./remove";
import { showCommentRoute } from "./show";
import { updateCommentRoute } from "./update";

export const commentsRoutes = new Elysia({
  prefix: "/comments", detail: {
    description: "Comments Endpoints",
    tags: ["comments"]
  }
})
  .use(addCommentRoute)
  .use(listCommentsRoute)
  .use(removeCommentRoute)
  .use(showCommentRoute)
  .use(updateCommentRoute)

import Elysia from "elysia";
import { addCommentRoute } from "./add";
import { listCommentsRoute } from "./list";

export const commentsRoutes = new Elysia({
  prefix: "/comments", detail: {
    description: "Comments Endpoints",
    tags: ["comments"]
  }
})
  .use(addCommentRoute)
  .use(listCommentsRoute)

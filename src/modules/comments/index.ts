import Elysia from "elysia";
import { addCommentRoute } from "./add";

export const commentsRoutes = new Elysia({
  prefix: "/comments", detail: {
    description: "Comments Endpoints",
    tags: ["comments"]
  }
})
  .use(addCommentRoute)

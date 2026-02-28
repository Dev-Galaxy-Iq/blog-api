import Elysia from "elysia";
import { postsListEndpoint } from "./list";
import { postsShowEndpoint } from "./show";
import { postsUpdateEndpoint } from "./update";
import { postsRemoveEndpoint } from "./remove";
import { postsAddEndpoint } from "./add";

export const postsRoutes = new Elysia({
  prefix: "/posts", detail: {
    description: "Post Endpoints",
    tags: ["posts"]
  }
})
  .use(postsAddEndpoint)
  .use(postsListEndpoint)
  .use(postsShowEndpoint)
  .use(postsUpdateEndpoint)
  .use(postsRemoveEndpoint)

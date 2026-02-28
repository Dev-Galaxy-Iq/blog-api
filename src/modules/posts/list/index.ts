import Elysia from "elysia";
import { listPostsService } from "./service";
import { listPostsQueryParams } from "./model";

export const postsListEndpoint = new Elysia({
  detail: {
    summary: "list posts"
  }
})
  .get("/", ({ query }) => {
    return listPostsService(query)
  }, {
    query: listPostsQueryParams
  })

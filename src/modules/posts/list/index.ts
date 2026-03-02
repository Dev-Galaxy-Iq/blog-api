import Elysia from "elysia";
import { listPostsService } from "./service";
import { listPostsQueryParams, listPostsResSchema } from "./model";
import { ResponseSchema } from "../../../lib/global-response";
import { CommonErrors } from "../../../lib/global-error";

export const postsListEndpoint = new Elysia({
  detail: {
    summary: "list"
  }
})
  .get("/", ({ query }) => {
    return listPostsService(query)
  }, {
    query: listPostsQueryParams,
    response: {
      200: ResponseSchema(listPostsResSchema),
      ...CommonErrors
    }
  })

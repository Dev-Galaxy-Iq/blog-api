import { Static, t } from "elysia";

export const listPostsQueryParams = t.Object({
  page: t.Number(),
  size: t.Number(),
})

export type listPostsQueryParamsType = Static<typeof listPostsQueryParams>

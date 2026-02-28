import { Static, t } from "elysia";

export const listPostsQueryParams = t.Object({
  page: t.Number({ default: 1 }),
  size: t.Number({ default: 5 }),
})

export type listPostsQueryParamsType = Static<typeof listPostsQueryParams>

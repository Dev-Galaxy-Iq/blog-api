import { Static, t } from "elysia";

export const listPostsQueryParams = t.Object({
  page: t.Number({ default: 1 }),
  size: t.Number({ default: 5 }),
  userId: t.Optional(t.String({ format: 'uuid' }))
})

export const listPostsResSchema = t.Array(t.Object({
  id: t.String({ format: "uuid" }),
  title: t.String(),
  content: t.String(),
  thumbnailUrl: t.Nullable(t.String()),
  authorId: t.String({ format: "uuid" }),
  createdAt: t.Date(),
  updatedAt: t.Date()
})
)
export type listPostsQueryParamsType = Static<typeof listPostsQueryParams>

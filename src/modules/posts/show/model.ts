import { Static, t } from "elysia";

export const showPostParamsSchema = t.Object({
  postId: t.String({
    format: "uuid"
  })
})

export const showPostResSchema = t.Object({
  id: t.String({ format: "uuid" }),
  title: t.String(),
  content: t.String(),
  thumbnailUrl: t.String(),
  authorId: t.String({ format: "uuid" }),
  createdAt: t.String({ format: "date-time" }),
  updatedAt: t.String({ format: "date-time" })
})

export type showPostParamsSchemaType = Static<typeof showPostParamsSchema>

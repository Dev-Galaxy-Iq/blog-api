import { Static, t } from "elysia";

export const removeCommentParamsSchema = t.Object({
  commentId: t.Number()
})

export const removeCommentResSchema = t.Object({
  id: t.Number({ type: "integer" }),
  message: t.String(),
  userId: t.String({ format: "uuid" }),
  postId: t.String({ format: "uuid" }),
  createdAt: t.Date(),
  updatedAt: t.Date()
})

export type removeCommentParamsSchemaType = Static<typeof removeCommentParamsSchema>

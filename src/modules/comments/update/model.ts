import { Static, t } from "elysia";

export const updateCommentParamsSchema = t.Object({
  commentId: t.Number()
})

export const updateCommentBodySchema = t.Object({
  message: t.String()
})
export const updateCommentResSchema = t.Object({
  id: t.Number({ type: "integer" }),
  message: t.String(),
  userId: t.String({ format: "uuid" }),
  postId: t.String({ format: "uuid" }),
  createdAt: t.Date(),
  updatedAt: t.Date()
})
export type updateCommentParamsSchemaType = Static<typeof updateCommentParamsSchema>
export type updateCommentBodySchemaType = Static<typeof updateCommentBodySchema>

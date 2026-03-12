import { Static, t } from "elysia";

export const addCommentParamsSchema = t.Object({
  postId: t.String()
})

export const addCommentBodySchema = t.Object({
  content: t.String()
})

export const addCommentResSchema = t.Object({
  id: t.Number({ type: "integer" }),
  message: t.String(),
  userId: t.String({ format: "uuid" }),
  postId: t.String({ format: "uuid" }),
  createdAt: t.Date(),
  updatedAt: t.Date()
})

export type addCommentParamsSchemaType = Static<typeof addCommentParamsSchema>
export type addCommentBodySchemaType = Static<typeof addCommentBodySchema>

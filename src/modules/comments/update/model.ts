import { Static, t } from "elysia";

export const updateCommentParamsSchema = t.Object({
  commentId: t.Number()
})

export const updateCommentBodySchema = t.Object({
  message: t.String()
})

export type updateCommentParamsSchemaType = Static<typeof updateCommentParamsSchema>
export type updateCommentBodySchemaType = Static<typeof updateCommentBodySchema>

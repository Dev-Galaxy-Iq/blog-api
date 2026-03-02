import { Static, t } from "elysia";

export const removeCommentParamsSchema = t.Object({
  commentId: t.Number()
})

export type removeCommentParamsSchemaType = Static<typeof removeCommentParamsSchema>

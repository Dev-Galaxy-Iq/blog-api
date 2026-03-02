import { Static, t } from "elysia";

export const showCommentParamsSchema = t.Object({
  commentId: t.Number()
})


export type showCommentParamsSchemaType = Static<typeof showCommentParamsSchema>

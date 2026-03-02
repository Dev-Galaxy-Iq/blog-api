import { Static, t } from "elysia";

export const addCommentParamsSchema = t.Object({
  postId: t.String()
})

export const addCommentBodySchema = t.Object({
  content: t.String()
})

export type addCommentParamsSchemaType = Static<typeof addCommentParamsSchema>
export type addCommentBodySchemaType = Static<typeof addCommentBodySchema>

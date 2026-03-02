import { t, Static } from "elysia";

export const listCommentsParamsSchema = t.Object({
  postId: t.String({
    format: "uuid"
  })
})

export type listCommentsParamsSchemaTypes = Static<typeof listCommentsParamsSchema>

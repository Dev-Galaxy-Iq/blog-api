import { Static, t } from "elysia";

export const showPostParamsSchema = t.Object({
  postId: t.String({
    format: "uuid"
  })
})

export type showPostParamsSchemaType = Static<typeof showPostParamsSchema>

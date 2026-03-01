import { t } from "elysia";

export const showPostParamsSchema = t.Object({
  postId: t.String({
    format: "uuid"
  })
})

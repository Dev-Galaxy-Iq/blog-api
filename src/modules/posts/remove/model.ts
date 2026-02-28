import { Static, t } from "elysia";

export const removePostParamsSchema = t.Object({
  postId: t.String()
})

export type removePostParamsSchemaType = Static<typeof removePostParamsSchema>

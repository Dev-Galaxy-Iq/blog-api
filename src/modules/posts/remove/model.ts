import { Static, t } from "elysia";

export const removePostParamsSchema = t.Object({
  postId: t.String()
})
export const removePostResSchema = t.Object({
  id: t.String({ format: "uuid" }),
  title: t.String(),
  content: t.String(),
  thumbnailUrl: t.String(),
  authorId: t.String({ format: "uuid" }),
  createdAt: t.Date(),
  updatedAt: t.Date()
})
export type removePostParamsSchemaType = Static<typeof removePostParamsSchema>

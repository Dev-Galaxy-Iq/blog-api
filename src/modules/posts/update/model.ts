import { Static, t } from "elysia";



export const updatePostParamsSchema = t.Object({
  postId: t.String({ format: "uuid" }),
})

export const updatePostBodySchema = t.Object({
  title: t.String(),
  content: t.String(),
  thumbnailUrl: t.Optional(t.String())
})

export const updatePostResSchema = t.Object({
  id: t.String({ format: "uuid" }),
  title: t.String(),
  content: t.String(),
  thumbnailUrl: t.Nullable(t.String()),
  authorId: t.String({ format: "uuid" }),
  createdAt: t.String({ format: "date-time" }),
  updatedAt: t.String({ format: "date-time" })
})
export type updatePostBodySchemaType = Static<typeof updatePostBodySchema>
export type updatePostParamsSchemaType = Static<typeof updatePostParamsSchema>  

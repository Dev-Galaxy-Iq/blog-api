import { Static, t } from "elysia";



export const updatePostParamsSchema = t.Object({
  postId: t.String({ format: "uuid" }),
})

export const updatePostBodySchema = t.Object({
  title: t.String(),
  content: t.String(),
  thumbnailUrl: t.Optional(t.String())
})
export type updatePostBodySchemaType = Static<typeof updatePostBodySchema>
export type updatePostParamsSchemaType = Static<typeof updatePostParamsSchema>  

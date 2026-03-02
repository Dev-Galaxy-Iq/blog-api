import { t, Static } from "elysia";

export const listCommentsParamsSchema = t.Object({
  postId: t.Optional(t.String({
    format: "uuid"
  })),
  userId: t.Optional(t.String({
    format: "uuid"
  }))
})


export const listCommentsResSchema = t.Array(t.Object({
  id: t.Number({ type: "integer" }),
  message: t.String(),
  userId: t.String({ format: "uuid" }),
  postId: t.String({ format: "uuid" }),
  createdAt: t.Date(),
  updatedAt: t.Date()
}))




export type listCommentsParamsSchemaTypes = Static<typeof listCommentsParamsSchema>

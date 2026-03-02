import { Static, t } from "elysia";

export const showUserParamsSchema = t.Object({
  userId: t.String({
    format: "uuid"
  })
})


export const showUserResSchema = t.Object({
  id: t.String({ format: "uuid" }),
  email: t.String({ format: "email" }),
  name: t.String(),
  username: t.String(),
  avatarUrl: t.Nullable(t.String()),
  createdAt: t.Date(),
  updatedAt: t.Date(),
  _count: t.Object({
    comments: t.Number({ type: "integer" }),
    posts: t.Number({ type: "integer" })
  })
})

export type showUserParamsSchemaType = Static<typeof showUserParamsSchema>

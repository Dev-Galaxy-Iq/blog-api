import { Static, t } from "elysia";

export const addPostBodySchema = t.Object({
  title: t.String(),
  content: t.String(),
  thumbnailUrl: t.Optional(t.String())
})

export const addPostResSchema = t.Object({
  id: t.String({ format: "uuid" }),
  title: t.String(),
  content: t.String(),
  thumbnailUrl: t.Nullable(t.String()),
  authorId: t.String({ format: "uuid" }),
  createdAt: t.Date(),
  updatedAt: t.Date()
})

export type addPostBodySchemaTypes = Static<typeof addPostBodySchema>

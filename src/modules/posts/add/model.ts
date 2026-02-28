import { Static, t } from "elysia";

export const addPostBodySchema = t.Object({
  title: t.String(),
  content: t.String(),
  thumbnailUrl: t.Optional(t.String())
})

export type addPostBodySchemaTypes = Static<typeof addPostBodySchema>

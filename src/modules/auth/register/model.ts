import { Static, t } from "elysia";

export const authRegisterBodySchema = t.Object({
  email: t.String(),
  password: t.String(),
  username: t.String(),
  name: t.String()
})

export type authRegisterBodySchemaType = Static<typeof authRegisterBodySchema>

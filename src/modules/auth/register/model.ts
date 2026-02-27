import { Static, t } from "elysia";

export const authRegisterBodySchema = t.Object({
  email: t.String({ format: "email", examples: ["test@gmail.com"] }),
  password: t.String({ examples: ["123456789"] }),
  username: t.String({ examples: ["test"] }),
  name: t.String({ examples: ["Test User"] })
})

export type authRegisterBodySchemaType = Static<typeof authRegisterBodySchema>

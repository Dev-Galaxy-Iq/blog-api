import { Static, t } from "elysia";

export const authLoginReqBodySchema = t.Object({
  email: t.String({
    format: "email",
    examples: ["test@gmail.com"]
  }),
  password: t.String({
    examples: ["123456789"]
  }),
})


export type authLoginReqBodySchemaType = Static<typeof authLoginReqBodySchema>

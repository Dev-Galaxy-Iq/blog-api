import { Static, t, TSchema } from "elysia";
import { ResponseSchema } from "../../../lib/global-response";


export const authLoginReqBodySchema = t.Object({
  email: t.String({
    format: "email",
    examples: ["test@gmail.com"]
  }),
  password: t.String({
    examples: ["123456789"]
  }),
})

const tokensSchema = t.Object({
  accessToken: t.String(),
  refreshToken: t.String()
})

export const authLoginResSchema = ResponseSchema({
  ...tokensSchema
})

export type authLoginReqBodySchemaType = Static<typeof authLoginReqBodySchema>

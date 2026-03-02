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

const userSchema = t.Object({
  id: t.String({ format: "uuid" }),
  email: t.String({ format: "email" }),
  name: t.String(),
  username: t.String(),
  avatarUrl: t.Nullable(t.String()),
  createdAt: t.Date({}),
  updatedAt: t.Date({})
})

export const authLoginResSchema = ResponseSchema({
  ...userSchema
})

export type authLoginReqBodySchemaType = Static<typeof authLoginReqBodySchema>

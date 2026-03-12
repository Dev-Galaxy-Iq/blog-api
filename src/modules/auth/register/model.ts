import { Static, t } from "elysia";
import { ResponseSchema } from "../../../lib/global-response";

export const authRegisterBodySchema = t.Object({
  email: t.String({ format: "email", examples: ["test@gmail.com"] }),
  password: t.String({ examples: ["123456789"] }),
  username: t.String({ examples: ["test"] }),
  name: t.String({ examples: ["Test User"] })
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

export const authRegisterResSchema = ResponseSchema(userSchema)

export type authRegisterBodySchemaType = Static<typeof authRegisterBodySchema>

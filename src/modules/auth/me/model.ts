
import { t } from "elysia";
import { ResponseSchema } from "../../../lib/global-response";

const userSchema = t.Object({
  id: t.String({ format: "uuid" }),
  email: t.String({ format: "email" }),
  name: t.String(),
  username: t.String(),
  avatarUrl: t.Nullable(t.String()),
  createdAt: t.Date({}),
  updatedAt: t.Date({})
})

export const authMeResSchema = ResponseSchema(userSchema)

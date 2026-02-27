
import { t } from "elysia";

export const authLoginReqBodySchema = t.Object({
  email: t.String(),
  password: t.String(),
})

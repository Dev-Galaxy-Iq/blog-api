
import { t } from "elysia";
export const loginReqBodySchema = t.Object({
  email: t.String(),
  password: t.String(),
})

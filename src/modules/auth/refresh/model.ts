
import { t } from "elysia";
import { ResponseSchema } from "../../../lib/global-response";
export const authRefreshBodySchema = t.Object({
  refreshToken: t.String()
})
export const authRefreshResSchema = t.Object({
  accessToken: t.String(),
  refreshToken: t.String(),
})

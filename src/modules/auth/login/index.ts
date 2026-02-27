import Elysia, { t } from "elysia";
import { authLoginService } from "./service";
import { authLoginReqBodySchema } from "./model";
import jwt from "@elysiajs/jwt";
import { ApiError } from "../../../lib/global-error";

export const authLoginRoute = new Elysia()
  .use(
    jwt({
      name: 'accesstokenjwt',
      secret: Bun.env.ACCESS_SECERET!
    })
  )
  .use(
    jwt({
      name: 'refreshtokenjwt',
      secret: Bun.env.REFRESH_SECERET!
    })
  )
  .post("/login", async ({ body, refreshtokenjwt, accesstokenjwt, cookie: { access_token, refresh_token } }) => {
    const res = await authLoginService(body)

    const access_token_jwt = await accesstokenjwt.sign({
      sub: res.id
    })
    const refresh_token_jwt = await refreshtokenjwt.sign({
      sub: res.id
    })

    if (!access_token_jwt || !refresh_token_jwt) throw new ApiError("error while signing access,refresh tokens", 500)

    access_token.set({
      value: access_token_jwt,
    })

    refresh_token.set({
      value: refresh_token_jwt,
    })

    return res

  }, {
    body: authLoginReqBodySchema,
  })

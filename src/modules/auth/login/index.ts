import Elysia, { t } from "elysia";
import { authLoginService } from "./service";
import { authLoginReqBodySchema } from "./model";
import jwt from "@elysiajs/jwt";
import { ApiError } from "../../../lib/global-error";
import { ApiResponse } from "../../../lib/global-response";

export const authLoginRoute = new Elysia({
  detail: {
    summary: "login"
  }
})
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
  .post("/login", async ({ body, set, refreshtokenjwt, accesstokenjwt, cookie: { access_token, refresh_token } }) => {
    const res = await authLoginService(body)

    const at_jwt = await accesstokenjwt.sign({
      sub: res.id
    })
    const rt_jwt = await refreshtokenjwt.sign({
      sub: res.id
    })

    if (!at_jwt || !rt_jwt) throw new ApiError("error while signing access,refresh tokens", 500)

    access_token.set({
      value: at_jwt,
      httpOnly: true,
      path: '/'
    })

    refresh_token.set({
      value: rt_jwt,
      httpOnly: true,
      path: '/'
    })

    // FIX: Manually force JSON content type to override the string-fallback bug
    set.headers['content-type'] = 'application/json; charset=utf-8'


    return ApiResponse(res)
  }, {
    body: authLoginReqBodySchema,
  })

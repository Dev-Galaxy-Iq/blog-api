import Elysia, { t } from "elysia";
import { authLoginService } from "./service";
import { authLoginReqBodySchema, authLoginResSchema } from "./model";
import jwt from "@elysiajs/jwt";
import { ApiError, CommonErrors } from "../../../lib/global-error";
import { ApiResponse } from "../../../lib/global-response";

export const authLoginRoute = new Elysia({
  detail: {
    summary: "login",
    operationId: "authLogin",
    description: 'login users to thier account'
  }
})
  .use(
    jwt({
      name: 'accesstokenjwt',
      secret: Bun.env.ACCESS_SECERET!,
      exp: "15m"
    })
  )
  .use(
    jwt({
      name: 'refreshtokenjwt',
      secret: Bun.env.REFRESH_SECERET!,
      exp: "7d"
    })
  )
  .post("/login", async ({ body, refreshtokenjwt, accesstokenjwt }) => {
    const res = await authLoginService(body)

    const at_jwt = await accesstokenjwt.sign({
      sub: res.id
    })
    const rt_jwt = await refreshtokenjwt.sign({
      sub: res.id
    })

    if (!at_jwt || !rt_jwt) throw new ApiError("error while signing access,refresh tokens", 500)

    return ApiResponse({
      accessToken: at_jwt,
      refreshToken: rt_jwt
    })
  }, {
    body: authLoginReqBodySchema,
    response: {
      200: authLoginResSchema,
      ...CommonErrors
    }
  })

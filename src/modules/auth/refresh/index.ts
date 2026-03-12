import Elysia from "elysia";
import jwt from "@elysiajs/jwt";
import { ApiResponse, ResponseSchema } from "../../../lib/global-response";
import { ApiError, CommonErrors } from "../../../lib/global-error";
import { authRefreshBodySchema, authRefreshResSchema } from "./model";


export const authRefreshRoute = new Elysia({
  detail: {
    summary: "refresh",
    operationId: "authRefreshTokens",
    description: "refresh access and refresh tokens"
  }
})
  .use(
    jwt({
      name: 'accesstokenjwt',
      secret: Bun.env.ACCESS_SECERET!,
      exp: "15m"
    },)
  )
  .use(
    jwt({
      name: 'refreshtokenjwt',
      secret: Bun.env.REFRESH_SECERET!,
      exp: "7d"
    })
  )
  .post("/refresh", async ({ refreshtokenjwt, body, accesstokenjwt }) => {

    // check if the refresh token is valid 
    const validRefresh = await refreshtokenjwt.verify(body.refreshToken)


    if (!validRefresh) throw new ApiError("invalid refresh token", 401)

    const new_access_token = await accesstokenjwt.sign({
      sub: validRefresh.sub
    })

    // now generate new refresh token
    const new_refresh_token = await refreshtokenjwt.sign({
      sub: validRefresh.sub
    })
    if (!new_refresh_token || !new_access_token) throw new ApiError("internal server error, 321412", 500)

    return ApiResponse({
      accessToken: new_access_token,
      refreshToken: new_refresh_token
    })
  }, {
    body: authRefreshBodySchema,
    response: ResponseSchema(authRefreshResSchema),
    ...CommonErrors
  })

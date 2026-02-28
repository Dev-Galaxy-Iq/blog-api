import Elysia from "elysia";
import jwt from "@elysiajs/jwt";
import { ApiResponse } from "../../../lib/global-response";
import { ApiError } from "../../../lib/global-error";


export const authRefreshRoute = new Elysia({
  detail: {
    summary: "refresh"
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
  .get("/refresh", async ({ refreshtokenjwt, accesstokenjwt, cookie: { refresh_token, access_token } }) => {
    // check if refresh tokn exits
    if (!refresh_token.value) throw new ApiError("missing refresh token", 401)

    // verify the refresh token
    const validRefresh = await refreshtokenjwt.verify(refresh_token?.value.toString())
    if (!validRefresh) throw new ApiError("invalid refresh token", 401)

    // now generate new access token
    const new_access_token = await accesstokenjwt.sign({
      sub: validRefresh.sub
    })
    if (!new_access_token) throw new ApiError("internal server error, 321412", 500)

    // sign this generated token to the cookie
    refresh_token.set({
      value: new_access_token,
      httpOnly: true,
      path: '/auth/refresh',
      maxAge: 60 * 60 * 24 * 7,
      sameSite: "strict"
    })



    return ApiResponse(null)
  })

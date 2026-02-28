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
      secret: Bun.env.ACCESS_SECERET!
    })
  )
  .use(
    jwt({
      name: 'refreshtokenjwt',
      secret: Bun.env.REFRESH_SECERET!
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
    access_token.set({
      value: new_access_token
    })



    return ApiResponse(null)
  })

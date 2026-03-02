import Elysia, { t } from "elysia";
import jwt from "@elysiajs/jwt";
import { auth_plugin } from "../../../plugins/auth-plugin";
import { authLogoutResSchema } from "./model";
import { ApiResponse, ResponseSchema } from "../../../lib/global-response"
import { CommonErrors } from "../../../lib/global-error";


export const authLogoutRoute = new Elysia({
  detail: {
    summary: "Logout",
    operationId: 'authLogout',
    description: 'logout user from the account'
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
  .use(auth_plugin)
  .post("/logout", ({ cookies: { accessToken, refreshToken } }) => {

    accessToken.remove()
    refreshToken.remove()

    return ApiResponse(null)
  }, {
    response: authLogoutResSchema,
    ...CommonErrors
  })

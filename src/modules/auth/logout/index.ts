import Elysia from "elysia";
import jwt from "@elysiajs/jwt";
import { auth_plugin } from "../../../plugins/auth-plugin";

export const authLogoutRoute = new Elysia()
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


    return {
      success: true,
      message: "successfully logged out",
      data: null
    }


  }, {
  })

import jwt from "@elysiajs/jwt";
import Elysia from "elysia";
import { ApiError } from "../lib/global-error";
import { db } from "../lib/db";

export const auth_plugin = (app: Elysia) => app
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
  .derive(async ({ accesstokenjwt, cookie: { access_token, refresh_token } }) => {

    // check if the access token cookie exists
    if (!access_token) throw new ApiError("Unauthernized request", 401)
    // if it exists then check if its valid

    const isValid = await accesstokenjwt.verify(access_token.value?.toString())

    // the access token jwt is not valid
    if (!isValid) throw new ApiError("Unauthernized", 401)


    const user = await db.user.findFirst({
      where: {
        id: isValid.sub
      },
    })

    return {
      user: {
        ...user, password: undefined
      },
      cookies: {
        accessToken: access_token,
        refreshToken: refresh_token
      }
    }
  })


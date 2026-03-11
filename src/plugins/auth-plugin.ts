import jwt from "@elysiajs/jwt";
import Elysia from "elysia";
import { ApiError } from "../lib/global-error";
import { db } from "../lib/db";
import { log } from "node:console";

export const auth_plugin = (app: Elysia) => app
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
  .derive(async ({ accesstokenjwt, cookie: { accessToken } }) => {
    const at = accessToken.value

    if (!at) throw new ApiError("Unauthorized request ...", 401)

    // @ts-ignore
    const isValid = await accesstokenjwt.verify(at)


    if (!isValid) throw new ApiError("Unauthorized", 401)

    const user = await db.user.findFirst({
      where: { id: isValid.sub }
    })

    return {
      user: { ...user, password: undefined }
    }
  })

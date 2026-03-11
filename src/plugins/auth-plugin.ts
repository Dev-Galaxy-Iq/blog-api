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
  .derive(async ({ accesstokenjwt, headers }) => {
    const auth = headers['authorization']
    if (!auth?.startsWith('Bearer ')) throw new ApiError("Unauthernized", 401)

    const accessToken = auth.split(' ')[1]

    // check if the access token cookie exists
    if (!accessToken) throw new ApiError("Unauthernized request", 401)
    // if it exists then check if its valid

    const isValid = await accesstokenjwt.verify(accessToken)

    // the access token jwt is not valid
    if (!isValid) throw new ApiError("Unauthernized", 401)

    const user = await db.user.findFirst({
      where: {
        id: isValid.sub
      },
    })



    console.log(user)

    return {
      user: {
        ...user, password: undefined
      }
    }
  })


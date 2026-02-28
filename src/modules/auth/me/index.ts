import Elysia from "elysia";
import jwt from "@elysiajs/jwt";
import { auth_plugin } from "../../../plugins/auth-plugin";

export const authMeRoute = new Elysia({
  detail: {
    summary: "me"
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
  .post("/me", ({ user }) => {

    return user
  }, {
  })

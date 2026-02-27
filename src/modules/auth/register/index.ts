import Elysia from "elysia";
import { loginReqBodySchema } from "./model";
import { authLoginService } from "./service";

export const authRegisterRoute = new Elysia()
  .post("/post", ({ body }) => {
    return authLoginService()
  }, {
    body: loginReqBodySchema
  })

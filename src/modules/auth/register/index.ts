import Elysia from "elysia";
import { loginReqBodySchema } from "./model";
import { authLoginService } from "./service";

export const authRegisterRoute = new Elysia()
  .post("/register", ({ body }) => {
    return authLoginService()
  }, {
    body: loginReqBodySchema
  })

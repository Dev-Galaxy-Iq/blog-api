import Elysia from "elysia";
import { authLoginService } from "./service";
import { authLoginReqBodySchema } from "./model";

export const authLoginRoute = new Elysia()
  .post("/login", ({ body }) => {
    return authLoginService()
  }, {
    body: authLoginReqBodySchema
  })

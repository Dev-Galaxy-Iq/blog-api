import Elysia from "elysia";
import { authRegisterService } from "./service";
import { authRegisterBodySchema } from "./model";


export const authRegisterRoute = new Elysia()
  .post("/register", ({ body }) => {
    return authRegisterService(body)
  }, {
    body: authRegisterBodySchema
  })



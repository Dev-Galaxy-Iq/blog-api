import Elysia from "elysia";
import { authRegisterService } from "./service";
import { authRegisterBodySchema } from "./model";


export const authRegisterRoute = new Elysia({
  detail: {
    summary: "register"
  }

})
  .post("/register", ({ body }) => {
    return authRegisterService(body)
  }, {
    body: authRegisterBodySchema
  })



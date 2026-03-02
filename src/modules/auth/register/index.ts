import Elysia from "elysia";
import { authRegisterService } from "./service";
import { authRegisterBodySchema, authRegisterResSchema } from "./model";


export const authRegisterRoute = new Elysia({
  detail: {
    summary: "register",
    operationId: 'authRegister',
  }
})
  .post("/register", ({ body }) => {
    return authRegisterService(body)
  }, {
    body: authRegisterBodySchema,
    response: authRegisterResSchema
  })



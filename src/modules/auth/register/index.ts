import Elysia from "elysia";
import { authRegisterService } from "./service";
import { authRegisterBodySchema, authRegisterResSchema } from "./model";
import { CommonErrors } from "../../../lib/global-error";


export const authRegisterRoute = new Elysia({
  detail: {
    summary: "register",
    operationId: 'authRegister',
    description: "register new account"
  }
})
  .post("/register", ({ body }) => {
    return authRegisterService(body)
  }, {
    body: authRegisterBodySchema,
    response: authRegisterResSchema,
    ...CommonErrors
  })



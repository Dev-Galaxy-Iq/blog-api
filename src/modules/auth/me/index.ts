import Elysia from "elysia";
import { authMeBodySchema } from "./model";
import { authMeService } from "./service";

export const authMeRoute = new Elysia()
  .post("/me", ({ body }) => {
    return authMeService()
  }, {
    body: authMeBodySchema
  })

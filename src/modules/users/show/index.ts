import Elysia from "elysia";
import { showUserService } from "./service";
import { ResponseSchema } from "../../../lib/global-response";
import { CommonErrors } from "../../../lib/global-error";
import { showUserParamsSchema, showUserResSchema } from "./model";

export const showUserRoute = new Elysia({
  detail: {
    summary: "show"
  }
})
  .get("/show/:userId", ({ params }) => {
    return showUserService(params)
  }, {
    params: showUserParamsSchema,
    response: {
      200: ResponseSchema(showUserResSchema),
      ...CommonErrors
    }
  })

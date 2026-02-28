import Elysia from "elysia";
import { auth_plugin } from "../../../plugins/auth-plugin";
import { removePostParamsSchema } from "./model";
import { removePostService } from "./service";

export const postsRemoveEndpoint = new Elysia({
  detail: {
    summary: "remove post"
  }
})
  .use(auth_plugin)
  .delete("/:postId", ({ user, params }) => {
    return removePostService(params, user.id)
  }, {
    params: removePostParamsSchema
  })

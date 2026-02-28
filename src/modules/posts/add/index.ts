import Elysia from "elysia";
import { addPostBodySchema } from "./model";
import { addPostService } from "./service";
import { auth_plugin } from "../../../plugins/auth-plugin";

export const postsAddEndpoint = new Elysia({
  detail: {
    summary: "add new post"
  }
})
  .use(auth_plugin)
  .post("/add", ({ body, user }) => {
    console.log(user);

    return addPostService(body, user.id)
  }, {
    body: addPostBodySchema
  })

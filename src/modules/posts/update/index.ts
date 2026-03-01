import Elysia from "elysia";
import { updatePostBodySchema, updatePostParamsSchema } from "./model";
import { updatePostSerivce } from "./service";
import { auth_plugin } from "../../../plugins/auth-plugin";

export const postsUpdateEndpoint = new Elysia({
  detail: {
    summary: "update posts ",
  }
}).use(auth_plugin).patch('/:postId', ({ params, body, user }) => {
  return updatePostSerivce(params, body, user.id);
}, { params: updatePostParamsSchema, body: updatePostBodySchema })

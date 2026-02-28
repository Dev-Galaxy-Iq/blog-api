import Elysia from "elysia";
import { authLoginRoute } from "./login";
import { authRegisterRoute } from "./register";
import { authMeRoute } from "./me";
import { authLogoutRoute } from "./logout";
import { authRefreshRoute } from "./refresh";

export const authRoutes = new Elysia({
  prefix: "/auth", detail: {
    description: "Auth Endpoints",
    tags: ["auth"]
  }
})
  .use(authLoginRoute)
  .use(authRegisterRoute)
  .use(authMeRoute)
  .use(authLogoutRoute)
  .use(authRefreshRoute)

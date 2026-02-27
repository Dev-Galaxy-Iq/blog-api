import Elysia from "elysia";
import { authLoginRoute } from "./login";
import { authRegisterRoute } from "./register";
import { authMeRoute } from "./me";

export const authRoutes = new Elysia({ prefix: "/auth" })
  .use(authLoginRoute)
  .use(authRegisterRoute)
  .use(authMeRoute)

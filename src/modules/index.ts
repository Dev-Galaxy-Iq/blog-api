import Elysia from "elysia";
import { authRoutes } from "./auth";
import { postsRoutes } from "./posts";

export const allRoutes = new Elysia()
  .use(authRoutes)
  .use(postsRoutes)


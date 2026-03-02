import Elysia from "elysia";
import { authRoutes } from "./auth";
import { postsRoutes } from "./posts";
import { commentsRoutes } from "./comments";

export const allRoutes = new Elysia()
  .use(authRoutes)
  .use(postsRoutes)
  .use(commentsRoutes)


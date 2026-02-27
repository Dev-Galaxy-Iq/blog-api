import Elysia from "elysia";
import { authRoutes } from "./auth";

export const allRoutes = new Elysia()
  .use(authRoutes)


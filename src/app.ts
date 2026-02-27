import { Elysia } from "elysia";
import cors from "@elysiajs/cors";
import openapi from "@elysiajs/openapi";
import { authRoutes } from "./modules/auth";

const app = new Elysia()
  .use(cors({
    origin: "*",
    credentials: true
  }))
  .use(authRoutes)
  .use(openapi())
  .listen(4000);

console.log(
  `http://${app.server?.hostname}:${app.server?.port}/openapi`
);

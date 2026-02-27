import { Elysia } from "elysia";
import { authRoutes } from "./modules/auth/route";

const app = new Elysia()
  .use(authRoutes)
  .get("/health", () => "Hello Elysia")
  .listen(4000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

import Elysia from "elysia";

export const authRoutes = new Elysia()
  .get("/auth/login", ({ body }) => "login")
  .get("/auth/register", ({ body }) => "register")
  .get("/auth/logout", ({ body }) => "logout")
  .get("/auth/me", ({ body }) => "profile")

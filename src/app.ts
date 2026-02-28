import { Elysia } from "elysia";

import openapi from "@elysiajs/openapi";
import cors from "@elysiajs/cors";
import { ApiError } from "./lib/global-error";
import { allRoutes } from "./modules";

const app = new Elysia()
  .use(cors({
    origin: "*",
    credentials: true
  }))
  .error({
    ApiError
  })

// for reference : https://elysiajs.com/patterns/error-handling
app.onError(({ error, set }) => {
  if (error instanceof ApiError) {
    set.status = error.code;
    return { success: false, message: error.message, data: null };
  }
  set.status = 500;
  return { success: false, message: "Internal server error", data: null };
})

  .use(allRoutes)
  .use(openapi())
  .listen(4000);

console.log(
  `http://${app.server?.hostname}:${app.server?.port}/openapi`
);

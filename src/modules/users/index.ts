import Elysia from "elysia";
import { showUserRoute } from "./show";

export const usersRoute = new Elysia({
  prefix: "/users", detail: {
    description: "Users Endpoints",
    tags: ["users"]
  }
})
  .use(showUserRoute)

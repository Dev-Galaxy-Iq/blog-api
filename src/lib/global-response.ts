import { t, TSchema } from "elysia";

export const ApiResponse = <T>(data: T, message = "Successful operation", success = true) => {
  return {
    success, message, data
  }
}

export const ResponseSchema = (data: TSchema) =>
  t.Object({
    success: t.Boolean(),
    message: t.String(),
    data
  });


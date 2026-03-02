import { t, TSchema } from "elysia";

/**
 * Success Status Codes:
 * - 200 OK: Request succeeded
 * - 201 Created: Resource created successfully
 * - 204 No Content: Success but no content to return
 */
export const ApiResponse = <T>(
  data: T,
  message = "Successful operation",
  success = true
) => {
  return {
    success,
    message,
    data
  }
}

/**
 * Generic response schema wrapper
 * @param data - TSchema for response data
 * @returns Schema for {success, message, data}
 */
export const ResponseSchema = (data: TSchema) => (
  t.Object({
    success: t.Boolean({
      default: true
    }),
    message: t.String(),
    data
  })
)

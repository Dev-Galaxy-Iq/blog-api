/**
 * Error Status Codes:
 * - 400 Bad Request: Invalid request syntax/parameters
 * - 401 Unauthorized: Missing or invalid authentication
 * - 403 Forbidden: Authenticated but no permission
 * - 404 Not Found: Resource doesn't exist
 * - 409 Conflict: Request conflicts (duplicate, etc.)
 * - 422 Unprocessable Entity: Validation failed
 * - 429 Too Many Requests: Rate limited
 * - 500 Internal Server Error: Server error
 * - 503 Service Unavailable: Server temporarily unavailable
 */
export class ApiError extends Error {
  public code: number;
  public success = false;

  constructor(message: string, code: number) {
    super(message);
    this.code = code;
  }
}


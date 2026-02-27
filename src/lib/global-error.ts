export class ApiError extends Error {
  public code: number;
  public success = false;

  constructor(message: string, code: number) {
    super(message);
    this.code = code;
  }
}

export const ApiResponse = <T>(data: T, message = "Successful operation", success = true) => {
  return {
    success, message, data
  }
}

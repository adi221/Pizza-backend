const HttpErrorBuilder = (code, statusCode) => class HttpError extends Error {
  constructor(message, data) {
    super()
    this.message = message
    this.statusCode = statusCode
    this.code = code
    this.data = data
    Error.captureStackTrace(this, HttpError)
  }
}

export const userErrors = {
  USER_NOT_FOUND: HttpErrorBuilder('USER_NOT_FOUND', 404),
  EMAIL_ALREADY_EXIST: HttpErrorBuilder('EMAIL_ALREADY_EXISTS', 409)
}

export const mealErrors = {
  MEAL_NOT_FOUND: HttpErrorBuilder('MEAL_NOT_FOUND', 404),
}
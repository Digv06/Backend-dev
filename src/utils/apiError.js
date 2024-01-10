class apiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null; // The data might represent information, configuration settings, or some form of state relevant to the functionality of the code. It set to null
    this.message = message;
    this.errors = errors;

    // stack is used to trace the error in the proper positon has been traced
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { apiError };


export class ApplicationError extends Error {
  public status: number;
  public errorId: string;

  constructor(message: string, status: number, errorId: string = null) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;

    this.message = message ||
      'Something went wrong. Please try again.';

    this.status = status || 500;
    this.errorId = errorId;
  }
}
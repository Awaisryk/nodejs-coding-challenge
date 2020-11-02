
import { ApplicationError } from './app-error-helper';

export class BadRequestError extends ApplicationError {
  constructor(message: string = null) {
    super(message || 'Bad request.', 400);
  }
}
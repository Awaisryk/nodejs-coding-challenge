
import { ApplicationError } from './app-error-helper';

export class InternalServerError extends ApplicationError {
  constructor(message: string, errorId: string = null) {
    super(message || `Could not process your request at the moment.`, 500, errorId);
  }
}
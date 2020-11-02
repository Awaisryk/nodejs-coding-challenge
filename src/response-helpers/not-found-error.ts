
import { ApplicationError } from './app-error-helper';

export class NotFoundError extends ApplicationError {
  constructor(message: string = null) {
    super(message || 'No item found.', 404);
  }
}

import { ApplicationError } from './app-error-helper';

export class ForbiddenError extends ApplicationError {
  constructor(message: string = null) {
    super(message || 'You cannot access this item.', 403);
  }
}
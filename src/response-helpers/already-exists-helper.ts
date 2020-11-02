
import { ApplicationError } from './app-error-helper';

export class AlreadyExistsError extends ApplicationError {
  constructor(message: string = null) {
    super(message || 'Already exists', 204);
  }
}
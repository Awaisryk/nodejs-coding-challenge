"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationError = void 0;
class ApplicationError extends Error {
    constructor(message, status, errorId = null) {
        super();
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
        this.message = message ||
            'Something went wrong. Please try again.';
        this.status = status || 500;
        this.errorId = errorId;
    }
}
exports.ApplicationError = ApplicationError;
//# sourceMappingURL=app-error-helper.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestError = void 0;
const app_error_helper_1 = require("./app-error-helper");
class BadRequestError extends app_error_helper_1.ApplicationError {
    constructor(message = null) {
        super(message || 'Bad request.', 400);
    }
}
exports.BadRequestError = BadRequestError;
//# sourceMappingURL=bad-request-error.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const app_error_helper_1 = require("./app-error-helper");
class NotFoundError extends app_error_helper_1.ApplicationError {
    constructor(message = null) {
        super(message || 'No item found.', 404);
    }
}
exports.NotFoundError = NotFoundError;
//# sourceMappingURL=not-found-error.js.map
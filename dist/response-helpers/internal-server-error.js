"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerError = void 0;
const app_error_helper_1 = require("./app-error-helper");
class InternalServerError extends app_error_helper_1.ApplicationError {
    constructor(message, errorId = null) {
        super(message || `Could not process your request at the moment.`, 500, errorId);
    }
}
exports.InternalServerError = InternalServerError;
//# sourceMappingURL=internal-server-error.js.map
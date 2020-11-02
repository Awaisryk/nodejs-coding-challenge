"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForbiddenError = void 0;
const app_error_helper_1 = require("./app-error-helper");
class ForbiddenError extends app_error_helper_1.ApplicationError {
    constructor(message = null) {
        super(message || 'You cannot access this item.', 403);
    }
}
exports.ForbiddenError = ForbiddenError;
//# sourceMappingURL=forbidden-helper.js.map
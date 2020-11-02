"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlreadyExistsError = void 0;
const app_error_helper_1 = require("./app-error-helper");
class AlreadyExistsError extends app_error_helper_1.ApplicationError {
    constructor(message = null) {
        super(message || 'Already exists', 204);
    }
}
exports.AlreadyExistsError = AlreadyExistsError;
//# sourceMappingURL=already-exists-helper.js.map
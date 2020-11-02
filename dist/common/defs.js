"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapAsync = void 0;
function wrapAsync(fn) {
    return function (req, res, next) {
        return Promise.resolve(fn(req, res, next)).catch(next);
    };
}
exports.wrapAsync = wrapAsync;
//# sourceMappingURL=defs.js.map
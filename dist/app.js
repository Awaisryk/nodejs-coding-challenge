"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const bad_request_error_1 = require("./response-helpers/bad-request-error");
const forbidden_helper_1 = require("./response-helpers/forbidden-helper");
const internal_server_error_1 = require("./response-helpers/internal-server-error");
const not_found_error_1 = require("./response-helpers/not-found-error");
const users_routes_1 = __importDefault(require("./routes/users.routes"));
const Constants = __importStar(require("./routes/constants"));
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express_1.default();
app.use(bodyParser.json());
app.use(cors());
app.use(Constants.USERS_ROUTE, users_routes_1.default);
app.use((err, req, res, next) => {
    if (err instanceof not_found_error_1.NotFoundError) {
        res.status(404).json({ errorMessage: err.message, name: err.name, status: err.status });
    }
    else if (err instanceof bad_request_error_1.BadRequestError) {
        res.status(400).json({ errorMessage: err.message, name: err.name, status: err.status });
    }
    else if (err instanceof forbidden_helper_1.ForbiddenError) {
        res.status(403).json({ errorMessage: err.message, name: err.name, status: err.status });
    }
    else if (err instanceof internal_server_error_1.InternalServerError) {
        console.log(`${new Date().toISOString()} - error occured: ${err.errorId} - ${JSON.stringify(err.message)}`);
        const errorMessage = `Error occured. ID: ${err.errorId}`;
        res.status(500).json({ errorMessage: errorMessage });
    }
    else {
        console.log(`${new Date().toISOString()} - error occured: ${JSON.stringify(err.message)}`);
        res.status(500).json({ errorMessage: `Could not process your request at the moment.` });
    }
    next();
});
app.listen(3004, function () {
    console.log("aws express server listening at 3004");
});
exports.default = app;
//# sourceMappingURL=app.js.map
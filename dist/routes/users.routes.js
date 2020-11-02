"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
const defs_1 = require("../common/defs");
const users_helper_1 = require("../libs/users-helper");
const bad_request_error_1 = require("../response-helpers/bad-request-error");
const not_found_error_1 = require("../response-helpers/not-found-error");
const already_exists_helper_1 = require("../response-helpers/already-exists-helper");
router.get('/', defs_1.wrapAsync((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let results = yield users_helper_1.usersHelper.list();
    if (results.length === 0) {
        throw new not_found_error_1.NotFoundError();
    }
    const items = results.map(item => (Object.assign({}, item.props)));
    const response = {
        count: items.length,
        items
    };
    res.status(200).json(response);
})));
router.post('/', defs_1.wrapAsync((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const props = req.body;
    if (!props || Object.keys(props).length === 0) {
        throw new bad_request_error_1.BadRequestError();
    }
    let doc = yield users_helper_1.usersHelper.create(props);
    if (!doc) {
        throw new bad_request_error_1.BadRequestError();
    }
    if (Object.keys(doc).length === 0) {
        throw new already_exists_helper_1.AlreadyExistsError();
    }
    res.status(200).json(doc.props);
})));
router.patch('/:id', defs_1.wrapAsync((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const props = req.body;
    if (!req.params.id || !props || Object.keys(props).length === 0) {
        throw new bad_request_error_1.BadRequestError();
    }
    const id = req.params.id;
    let doc = yield users_helper_1.usersHelper.update(id, props);
    if (!doc) {
        throw new bad_request_error_1.BadRequestError();
    }
    if (Object.keys(doc).length === 0) {
        throw new already_exists_helper_1.AlreadyExistsError();
    }
    res.status(200).json(doc.props);
})));
router.delete('/:id', defs_1.wrapAsync((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        throw new bad_request_error_1.BadRequestError();
    }
    let results = yield yield users_helper_1.usersHelper.delete(id);
    if (!results) {
        throw new bad_request_error_1.BadRequestError();
    }
    res.status(200).json({});
})));
exports.default = router;
//# sourceMappingURL=users.routes.js.map
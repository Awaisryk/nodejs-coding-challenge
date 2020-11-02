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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../routes/constants");
const app_1 = __importDefault(require("../../app"));
const chai = __importStar(require("chai"));
const samples_1 = require("../samples/samples");
const users_helper_1 = require("../../libs/users-helper");
const supertest_1 = __importDefault(require("supertest"));
const expect = chai.expect;
describe('Users Routes test suite.', () => {
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        yield users_helper_1.usersHelper.delete(samples_1.newUserDoc.email).catch(err => console.log(err));
    }));
    it('should create user doc', () => __awaiter(void 0, void 0, void 0, function* () {
        const route = constants_1.USERS_ROUTE;
        const response = yield supertest_1.default(app_1.default).post(route).send(samples_1.newUserDoc);
        expect(response.status === 200).to.be.true;
    }));
    it('should update user doc', () => __awaiter(void 0, void 0, void 0, function* () {
        const email = samples_1.newUserDoc.email;
        const route = `${constants_1.USERS_ROUTE}/${email}`;
        const updatedDoc = {
            name: 'TestNewId'
        };
        const response = yield supertest_1.default(app_1.default).patch(route).send(updatedDoc);
        expect(response.status === 200).to.be.true;
    }));
    it('should fetch all users docs', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield supertest_1.default(app_1.default).get(constants_1.USERS_ROUTE);
        expect(response.status === 200).to.be.true;
    }));
    it('should delete user doc for given user id', () => __awaiter(void 0, void 0, void 0, function* () {
        const email = samples_1.newUserDoc.email;
        const route = `${constants_1.USERS_ROUTE}/${email}`;
        const response = yield supertest_1.default(app_1.default).delete(route);
        expect(response.status === 200).to.be.true;
    }));
});
//# sourceMappingURL=users-routes.spec.js.map
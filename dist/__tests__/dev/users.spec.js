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
Object.defineProperty(exports, "__esModule", { value: true });
const chai = __importStar(require("chai"));
const samples_1 = require("../samples/samples");
const users_helper_1 = require("../../libs/users-helper");
const expect = chai.expect;
const myDoc = samples_1.newUserDoc;
describe('users-helper dev test cases suite', () => {
    it('create(), should create item in db', () => __awaiter(void 0, void 0, void 0, function* () {
        const doc = yield users_helper_1.usersHelper.create(myDoc);
        let v = doc.email === myDoc.email;
        expect(v).to.be.true;
    }));
    it('list(), should return all active users docs, ', () => __awaiter(void 0, void 0, void 0, function* () {
        const listDocs = yield users_helper_1.usersHelper.list();
        let v = listDocs.length !== 0;
        listDocs.forEach(d => v = v && d.email !== null);
        expect(v).to.be.true;
    }));
    it('update(), should update item in db, ', () => __awaiter(void 0, void 0, void 0, function* () {
        const updatedDoc = {
            name: 'TestNewId'
        };
        const doc = yield users_helper_1.usersHelper.update(samples_1.newUserDoc.email, updatedDoc);
        let v = doc.name === updatedDoc.name;
        expect(v).to.be.true;
    }));
    it('delete(), should delete doc for given user id', () => __awaiter(void 0, void 0, void 0, function* () {
        const deleted = yield users_helper_1.usersHelper.delete(myDoc.email);
        expect(deleted).to.be.true;
    }));
});
//# sourceMappingURL=users.spec.js.map
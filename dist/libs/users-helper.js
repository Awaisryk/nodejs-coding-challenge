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
exports.usersHelper = exports.UsersCrud = void 0;
const db_helper_1 = require("./db-helper");
const USER_TABLE_NAME = 'users';
class UsersCrud {
    constructor() {
        this.dbHelper = new db_helper_1.DbHelper(USER_TABLE_NAME);
    }
    create(doc) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dbHelper.create(doc);
        });
    }
    update(id, updateDoc) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dbHelper.update(id, updateDoc);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dbHelper.delete(id);
        });
    }
    list(args = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dbHelper.list(args);
        });
    }
}
exports.UsersCrud = UsersCrud;
exports.usersHelper = new UsersCrud();
if (typeof require !== 'undefined' && require.main === module) {
    const { newUserDoc } = require('../__tests__/samples/samples');
    function testUsersHelper() {
        return __awaiter(this, void 0, void 0, function* () {
            let cDoc = yield exports.usersHelper.create(newUserDoc);
            console.log(`create(), cDoc = ${JSON.stringify(cDoc)}`);
            if (!cDoc) {
                console.error(`cDoc should not be null.`);
                return;
            }
            let updateProps = {
                name: 'TestUser123'
            };
            const uDoc = yield exports.usersHelper.update(newUserDoc.email, updateProps);
            if (!uDoc) {
                console.error(`uDoc should not be null`);
                return;
            }
            const lDocs = yield exports.usersHelper.list();
            console.log(`list(), lDocs = ${JSON.stringify(lDocs)}`);
            yield exports.usersHelper.delete(newUserDoc.id);
        });
    }
    testUsersHelper();
}
//# sourceMappingURL=users-helper.js.map
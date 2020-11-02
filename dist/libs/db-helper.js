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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbHelper = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class DbHelper {
    constructor(tableName) {
        this.filePath = path_1.default.resolve(`./data/${tableName}.json`);
        this.records = require(this.filePath);
    }
    writeToDb(doc) {
        return __awaiter(this, void 0, void 0, function* () {
            fs_1.default.writeFileSync(this.filePath, JSON.stringify(doc));
        });
    }
    create(doc) {
        return __awaiter(this, void 0, void 0, function* () {
            this.records.push(doc);
            this.writeToDb(this.records);
            return doc; // in a real db, it would consists some extra attributes like createdAt, updatedAt etc
        });
    }
    update(id, updateDoc) {
        return __awaiter(this, void 0, void 0, function* () {
            const doc = this.records.find((i) => i.email);
            Object.assign(doc, updateDoc);
            this.writeToDb(this.records);
            return doc;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newRecords = this.records.filter((i) => i.email !== id);
                this.writeToDb(newRecords);
                return true;
            }
            catch (e) {
                return false;
            }
        });
    }
    list(args = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.records;
        });
    }
}
exports.DbHelper = DbHelper;
//# sourceMappingURL=db-helper.js.map
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
exports.deleteDocument = exports.createDocument = exports.findMany = exports.findUniqueById = void 0;
const db_1 = __importDefault(require("../db/db"));
function findUniqueById(id, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.default.documents.findMany({
            where: {
                id: id,
                userId: userId
            },
        });
    });
}
exports.findUniqueById = findUniqueById;
function findMany(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.default.documents.findMany({
            where: {
                userId: userId
            }
        });
    });
}
exports.findMany = findMany;
function createDocument(document, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.default.documents.create({ data: Object.assign(Object.assign({}, document), { userId }) });
    });
}
exports.createDocument = createDocument;
function deleteDocument(id, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.default.documents.deleteMany({
            where: {
                id: id,
                userId: userId
            }
        });
    });
}
exports.deleteDocument = deleteDocument;

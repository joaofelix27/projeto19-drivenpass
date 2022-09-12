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
exports.deleteCredential = exports.createCredential = exports.findMany = exports.findUniqueById = exports.findUniqueByTitle = void 0;
const db_1 = __importDefault(require("../db/db"));
function findUniqueByTitle(title, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.default.credentials.findMany({
            where: {
                title: title,
                userId: userId
            },
        });
    });
}
exports.findUniqueByTitle = findUniqueByTitle;
function findUniqueById(id, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.default.credentials.findMany({
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
        return yield db_1.default.credentials.findMany({
            where: {
                userId: userId
            }
        });
    });
}
exports.findMany = findMany;
function createCredential(credential, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.default.credentials.create({ data: Object.assign(Object.assign({}, credential), { userId }) });
    });
}
exports.createCredential = createCredential;
function deleteCredential(id, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.default.credentials.deleteMany({
            where: {
                id: id,
                userId: userId
            }
        });
    });
}
exports.deleteCredential = deleteCredential;
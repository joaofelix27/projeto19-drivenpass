"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
exports.deleteCredential = exports.getCredential = exports.createCredential = void 0;
const credentialRepository = __importStar(require("../repositories/credentialRepository"));
const cryptr_1 = __importDefault(require("cryptr"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const cryptr = new cryptr_1.default('myTotallySecretKey');
const createCredential = (credentialData, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, title, password, url } = credentialData;
    const alreadyExists = yield credentialRepository.findUniqueByTitle(title, userId);
    if (alreadyExists.length > 0) {
        throw { type: "conflict", message: "Credential title already in use!" };
    }
    const encryptedPassword = cryptr.encrypt(password);
    return yield credentialRepository.createCredential(Object.assign(Object.assign({}, credentialData), { password: encryptedPassword }), userId);
});
exports.createCredential = createCredential;
const getCredential = (credentialId, userId) => __awaiter(void 0, void 0, void 0, function* () {
    let credentials;
    if (credentialId) {
        credentials = yield credentialRepository.findUniqueById(credentialId, userId);
        if (!credentials.length)
            throw { type: "unauthorized", message: "Cannot acess this credential!" };
    }
    else {
        credentials = yield credentialRepository.findMany(userId);
    }
    const newCredentials = credentials.map(credential => {
        return Object.assign(Object.assign({}, credential), { password: cryptr.decrypt(credential.password) });
    });
    return newCredentials;
});
exports.getCredential = getCredential;
const deleteCredential = (credentialId, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedCredential = yield credentialRepository.deleteCredential(credentialId, userId);
    const deletedCredentialCount = deletedCredential.count;
    if (!deletedCredentialCount)
        throw { type: "unauthorized", message: "Cannot delete this credential!" };
    return deletedCredentialCount;
});
exports.deleteCredential = deleteCredential;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDocumentSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createDocumentSchema = joi_1.default.object({
    fullName: joi_1.default.string().required(),
    registerNumber: joi_1.default.string().required(),
    issueDate: joi_1.default.string().length(10).required(),
    expirationDate: joi_1.default.string().length(10).required(),
    issuingOrganization: joi_1.default.string().required(),
    type: joi_1.default.string().valid("RG", "CNH").required()
});

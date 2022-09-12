"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCardSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createCardSchema = joi_1.default.object({
    number: joi_1.default.string().length(16).required(),
    name: joi_1.default.string().required(),
    securityCode: joi_1.default.string().length(3).required(),
    expirationDate: joi_1.default.string().length(5).required(),
    password: joi_1.default.string().required(),
    title: joi_1.default.string().required(),
    isVirtual: joi_1.default.boolean().strict().required(),
    type: joi_1.default.string().valid("Credit", "Debit", "Value").required()
});

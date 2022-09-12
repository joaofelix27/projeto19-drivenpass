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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const documentControllers = __importStar(require("../controllers/documentControllers"));
const genericQuerySchemaMiddleware_1 = require("../middlewares/genericQuerySchemaMiddleware");
const genericSchemaMiddleware_1 = require("../middlewares/genericSchemaMiddleware");
const validateUserMiddleware_1 = __importDefault(require("../middlewares/validateUserMiddleware"));
const createDocumentSchema_1 = require("../schemas/createSchemas/createDocumentSchema");
const deleteSchema_1 = require("../schemas/deleteSchemas/deleteSchema");
const getSchema_1 = require("../schemas/getSchemas/getSchema");
const documentRouter = (0, express_1.Router)();
documentRouter.post("/documents", (0, genericSchemaMiddleware_1.validateSchema)(createDocumentSchema_1.createDocumentSchema), validateUserMiddleware_1.default, documentControllers.createDocument);
documentRouter.get("/documents", (0, genericQuerySchemaMiddleware_1.validateQuerySchema)(getSchema_1.getSchema), validateUserMiddleware_1.default, documentControllers.getDocument);
documentRouter.delete("/documents", (0, genericQuerySchemaMiddleware_1.validateQuerySchema)(deleteSchema_1.deleteSchema), validateUserMiddleware_1.default, documentControllers.deleteDocument);
exports.default = documentRouter;

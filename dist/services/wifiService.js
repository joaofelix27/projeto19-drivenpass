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
exports.deleteWifi = exports.getWifi = exports.createWifi = void 0;
const wifiRepository = __importStar(require("../repositories/wifiRepository"));
const cryptr_1 = __importDefault(require("cryptr"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const cryptr = new cryptr_1.default('myTotallySecretKey');
const createWifi = (wifiData, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const { password } = wifiData;
    const encryptedPassword = cryptr.encrypt(password);
    return yield wifiRepository.createWifi(Object.assign(Object.assign({}, wifiData), { password: encryptedPassword }), userId);
});
exports.createWifi = createWifi;
const getWifi = (wifiId, userId) => __awaiter(void 0, void 0, void 0, function* () {
    let wifis;
    if (wifiId) {
        wifis = yield wifiRepository.findUniqueById(wifiId, userId);
        if (!wifis.length)
            throw { type: "unauthorized", message: "Cannot acess this Wi-fi!" };
    }
    else {
        wifis = yield wifiRepository.findMany(userId);
    }
    return wifis;
});
exports.getWifi = getWifi;
const deleteWifi = (wifiId, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedWifi = yield wifiRepository.deleteWifi(wifiId, userId);
    const deletedWifiCount = deletedWifi.count;
    if (!deletedWifiCount)
        throw { type: "unauthorized", message: "Cannot delete this Wi-fi!" };
    return deletedWifiCount;
});
exports.deleteWifi = deleteWifi;

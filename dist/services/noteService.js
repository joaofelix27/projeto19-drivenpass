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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNote = exports.getNote = exports.createNote = void 0;
const noteRepository = __importStar(require("../repositories/noteRepository"));
const createNote = (noteData, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const { title } = noteData;
    const alreadyExists = yield noteRepository.findUniqueByTitle(title, userId);
    if (alreadyExists.length > 0) {
        throw { type: "conflict", message: "Note title already in use!" };
    }
    return yield noteRepository.createNote(noteData, userId);
});
exports.createNote = createNote;
const getNote = (noteId, userId) => __awaiter(void 0, void 0, void 0, function* () {
    let notes;
    if (noteId) {
        notes = yield noteRepository.findUniqueById(noteId, userId);
        if (!notes.length)
            throw { type: "unauthorized", message: "Cannot acess this Note!" };
    }
    else {
        notes = yield noteRepository.findMany(userId);
    }
    return notes;
});
exports.getNote = getNote;
const deleteNote = (noteId, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedNote = yield noteRepository.deleteNote(noteId, userId);
    const deletedNoteCount = deletedNote.count;
    if (!deletedNoteCount)
        throw { type: "unauthorized", message: "Cannot delete this Note!" };
    return deletedNoteCount;
});
exports.deleteNote = deleteNote;

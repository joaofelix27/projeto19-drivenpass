import * as noteRepository from '../repositories/noteRepository'
import Cryptr from 'cryptr';
import { createNoteType, getNoteType } from '../generics/types/types';
import dotenv from 'dotenv'
dotenv.config()
const cryptr = new Cryptr('myTotallySecretKey');



export const createNote: createNoteType= async (noteData,userId) => {
  const {title}=noteData
  const alreadyExists=await noteRepository.findUniqueByTitle(title,userId);
  if(alreadyExists.length>0){
    throw {type:"conflict", message:"Note title already in use!"}
  }

  return await noteRepository.createNote(noteData,userId)
};

export const getNote: getNoteType= async (noteId,userId) => {
  let notes;
  if (noteId){
    notes=await noteRepository.findUniqueById(noteId,userId);
    if (!notes.length) throw {type:"unauthorized", message:"Cannot acess this Note!"}
  } else {
    notes=await noteRepository.findMany(userId);
  }
  return notes
}


export const deleteNote: getNoteType= async (noteId,userId) => {
  const deletedNote = await noteRepository.deleteNote(noteId,userId)
  const deletedNoteCount=deletedNote.count
  if (!deletedNoteCount) throw {type:"unauthorized", message:"Cannot delete this Note!"}
  return deletedNoteCount
}

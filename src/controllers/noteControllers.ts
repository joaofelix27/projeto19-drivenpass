import * as noteService  from '../services/noteService'
import { controllersType } from '../types/auth/authTypes'
import { INoteData } from '../types/notes/noteTypes'

export const createNote:controllersType= async (req,res) => {
    const noteData: INoteData = req.body
    const userId = res.locals.userId
    const result = await noteService.createNote(noteData,userId)
    
    if (result) {
    return res.sendStatus(201)
    } else {
        throw {type:"error", message:"Could not create note"}
    }
}
export const getNote:controllersType= async (req,res) => {
    const {id:NoteId} = req.query
    const userId = res.locals.userId
    const result = await noteService.getNote(Number(NoteId),userId)
    
    if (result) {
    return res.status(200).send(result)
    } else {
        throw {type:"error", message:"Could not get Note"}
    }
}

export const deleteNote:controllersType= async (req,res) => {
    const {id:noteId} = req.query
    const userId = res.locals.userId
    const result = await noteService.deleteNote(Number(noteId),userId)
    if (result) {
    return res.status(200).send("Note deleted!")
    } else {
        throw {type:"error", message:"Could not delete Note"}
    }
}

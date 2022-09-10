import { controllersType,INoteData } from '../generics/types/types'
import * as noteService  from '../services/noteService'

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

// export const deleteNote:controllersType= async (req,res) => {
//     const {id:NoteId} = req.query
//     const userId = res.locals.userId
//     const result = await noteService.deleteNote(Number(NoteId),userId)
    
//     if (result) {
//     return res.status(200).send("Note deleted!")
//     } else {
//         throw {type:"error", message:"Could not delete Note"}
//     }
// }

import * as documentService  from '../services/documentService'
import { controllersType } from '../types/auth/authTypes'
import { IDocumentData } from '../types/documents/documentTypes'

export const createDocument:controllersType= async (req,res) => {
    const documentData: IDocumentData = req.body
    const userId = res.locals.userId
    const result = await documentService.createDocument(documentData,userId)
    
    if (result) {
    return res.sendStatus(201)
    } else {
        throw {type:"error", message:"Could not create document"}
    }
}
export const getDocument:controllersType= async (req,res) => {
    const {id:documentId} = req.query
    const userId = res.locals.userId
    const result = await documentService.getDocument(Number(documentId),userId)
    
    if (result) {
    return res.status(200).send(result)
    } else {
        throw {type:"error", message:"Could not get document"}
    }
}

export const deleteDocument:controllersType= async (req,res) => {
    const {id:documentId} = req.query
    const userId = res.locals.userId
    const result = await documentService.deleteDocument(Number(documentId),userId)
    
    if (result) {
    return res.status(200).send("Document deleted!")
    } else {
        throw {type:"error", message:"Could not delete document"}
    }
}

import * as documentRepository from '../repositories/documentRepository'
import Cryptr from 'cryptr';
import dotenv from 'dotenv'
import { createDocumentType, getDocumentType } from '../types/documents/documentTypes';
dotenv.config()
const cryptr = new Cryptr('myTotallySecretKey');



export const createDocument: createDocumentType= async (documentData,userId) => {
  return await documentRepository.createDocument(documentData,userId)
};

export const getDocument: getDocumentType= async (documentId,userId) => {
  let documents;
  if (documentId){
    documents=await documentRepository.findUniqueById(documentId,userId);
    if (!documents.length) throw {type:"unauthorized", message:"Cannot acess this document!"}
  } else {
    documents=await documentRepository.findMany(userId);
  }
  return documents
}

export const deleteDocument: getDocumentType= async (documentId,userId) => {
  const deletedDocument = await documentRepository.deleteDocument(documentId,userId)
  const deletedDocumentCount=deletedDocument.count
  if (!deletedDocumentCount) throw {type:"unauthorized", message:"Cannot delete this document!"}
  return deletedDocumentCount
}

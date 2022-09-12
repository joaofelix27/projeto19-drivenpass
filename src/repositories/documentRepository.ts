import connection from "../db/db";
import { IDocumentData } from "../types/documents/documentTypes";

export async function findUniqueById (id:number,userId:number){
  return await connection.documents.findMany({
      where: {
        id:id,
        userId:userId
      },
    });
}

export async function findMany (userId:number){
  return await connection.documents.findMany({
    where: {
      userId:userId
    }
  });
}

export async function createDocument (document:IDocumentData,userId:number){
    return await connection.documents.create ({ data: {...document,userId} });
}

export async function deleteDocument (id:number,userId:number){
  return await connection.documents.deleteMany ({
    where: {
    id:id,
    userId:userId
  }
})
}
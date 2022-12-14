import connection from "../db/db";
import { INoteData } from "../types/notes/noteTypes";

export async function findUniqueByTitle (title:string,userId:number){
    return await connection.notes.findMany({
        where: {
          title:title,
          userId:userId
        },
      });
}

export async function findUniqueById (id:number,userId:number){
  return await connection.notes.findMany({
      where: {
        id:id,
        userId:userId
      },
    });
}

export async function findMany (userId:number){
  return await connection.notes.findMany({
    where: {
      userId:userId
    }
  });
}

export async function createNote (note:INoteData,userId:number){
    return await connection.notes.create ({ data: {...note,userId} });
}

export async function deleteNote (id:number,userId:number){
  return await connection.notes.deleteMany ({
    where: {
    id:id,
    userId:userId
  }
})
}
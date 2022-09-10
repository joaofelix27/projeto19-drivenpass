import connection from "../db/db";
import { ICredentialData,  } from "../generics/types/types";

export async function findUniqueByTitle (title:string,userId:number){
    return await connection.credentials.findMany({
        where: {
          title:title,
          userId:userId
        },
      });
}

export async function findUniqueById (id:number,userId:number){
  return await connection.credentials.findMany({
      where: {
        id:id,
        userId:userId
      },
    });
}

export async function findMany (userId:number){
  return await connection.credentials.findMany({
    where: {
      userId:userId
    }
  });
}

export async function createCredential (credential:ICredentialData,userId:number){
    return await connection.credentials.create ({ data: {...credential,userId} });
}
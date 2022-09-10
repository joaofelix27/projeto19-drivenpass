import { users,credentials,notes} from "@prisma/client"
import { Request,Response } from "express";


export type IUsersData = Omit<users, 'id'>;
export type ICredentialData= Omit <credentials,'id'|'userId'>
export type INoteData= Omit <notes,'id'|'userId'>

export type authServiceType =(
   authData:IUsersData 
) => Promise<any>

export type createCredentialType =(
   credential:ICredentialData,
   userId:number
) => Promise<any>

export type createNoteType =(
   note:INoteData,
   userId:number
) => Promise<any>

export type getCredentialType =(
   credentialId:number,
   userId:number
) => Promise<any>

export type getNoteType =(
   noteId:number,
   userId:number
) => Promise<any>

export type controllersType =(
  req:Request,
  res:Response
) => Promise<any>
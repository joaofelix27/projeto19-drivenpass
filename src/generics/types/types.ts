import { users,credentials} from "@prisma/client"
import { Request,Response } from "express";


export type IUsersData = Omit<users, 'id'>;
export type ICredentialData= Omit <credentials,'id'|'userId'>
export type ICredentialData2= Omit <credentials,'id'>

export type authServiceType =(
   authData:IUsersData 
) => Promise<any>

export type createCredentialType =(
   credential:ICredentialData,
   userId:number
) => Promise<any>

export type controllersType =(
  req:Request,
  res:Response
) => Promise<any>
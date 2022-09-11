import { credentials } from "@prisma/client"



export type ICredentialData= Omit <credentials,'id'|'userId'>

export type createCredentialType =(
    credential:ICredentialData,
    userId:number
 ) => Promise<any>

 export type getCredentialType =(
    credentialId:number,
    userId:number
 ) => Promise<any>
import { documents } from "@prisma/client"



export type IDocumentData= Omit <documents,'id'|'userId'>

export type createDocumentType =(
    document:IDocumentData,
    userId:number
 ) => Promise<any>

 export type getDocumentType =(
    documentId:number,
    userId:number
 ) => Promise<any>
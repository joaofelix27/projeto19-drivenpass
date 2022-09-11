import { notes } from "@prisma/client"



export type INoteData= Omit <notes,'id'|'userId'>

export type createNoteType =(
    note:INoteData,
    userId:number
 ) => Promise<any>

 export type getNoteType =(
    noteId:number,
    userId:number
 ) => Promise<any>

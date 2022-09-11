import { cards } from "@prisma/client";


export type ICardData= Omit <cards,'id'|'userId'>

export type createCardType =(
    card:ICardData,
    userId:number
 ) => Promise<any>

 export type getCardType =(
    cardId:number,
    userId:number
 ) => Promise<any>
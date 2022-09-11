import connection from "../db/db";
import { ICardData } from "../types/cards/cardTypes";

export async function findUniqueByTitle (title:string,userId:number){
    return await connection.cards.findMany({
        where: {
          title:title,
          userId:userId
        },
      });
}

export async function findUniqueById (id:number,userId:number){
  return await connection.cards.findMany({
      where: {
        id:id,
        userId:userId
      },
    });
}

export async function findMany (userId:number){
  return await connection.cards.findMany({
    where: {
      userId:userId
    }
  });
}

export async function createCard (card:ICardData,userId:number){
    return await connection.cards.create ({ data: {...card,userId} });
}

export async function deleteCard (id:number,userId:number){
  return await connection.cards.deleteMany ({
    where: {
    id:id,
    userId:userId
  }
})
}
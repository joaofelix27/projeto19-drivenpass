import * as cardRepository from '../repositories/cardRepository'
import Cryptr from 'cryptr';
import dotenv from 'dotenv'
import { createCardType, getCardType } from '../types/cards/cardTypes';
dotenv.config()
const cryptr = new Cryptr('myTotallySecretKey');



export const createCard: createCardType= async (cardData,userId) => {
  const {title,password,securityCode}=cardData
  const alreadyExists=await cardRepository.findUniqueByTitle(title,userId);
  if(alreadyExists.length>0){
    throw {type:"conflict", message:"Card title already in use!"}
  }
  const encryptedPassword=cryptr.encrypt(password)
  const encryptedCVC=cryptr.encrypt(securityCode)

  return await cardRepository.createCard({...cardData, password:encryptedPassword,securityCode:encryptedCVC},userId)
};

export const getCard: getCardType= async (cardId,userId) => {
  let cards;
  if (cardId){
    cards=await cardRepository.findUniqueById(cardId,userId);
    if (!cards.length) throw {type:"unauthorized", message:"Cannot acess this card!"}
  } else {
    cards=await cardRepository.findMany(userId);
  }
  const newCards =cards.map( card => {
   return {...card,password:cryptr.decrypt (card.password),securityCode:cryptr.decrypt (card.securityCode)}
  })

  return newCards
}

export const deleteCard: getCardType= async (cardId,userId) => {
  const deletedCard = await cardRepository.deleteCard(cardId,userId)
  const deletedCardCount=deletedCard.count
  if (!deletedCardCount) throw {type:"unauthorized", message:"Cannot delete this card!"}
  return deletedCardCount
}

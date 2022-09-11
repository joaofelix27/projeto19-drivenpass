import * as cardService  from '../services/cardService'
import { controllersType } from '../types/auth/authTypes'
import { ICardData } from '../types/cards/cardTypes'

export const createCard:controllersType= async (req,res) => {
    const cardData: ICardData = req.body
    const userId = res.locals.userId
    const result = await cardService.createCard(cardData,userId)
    
    if (result) {
    return res.sendStatus(201)
    } else {
        throw {type:"error", message:"Could not create card"}
    }
}
export const getCard:controllersType= async (req,res) => {
    const {id:cardId} = req.query
    const userId = res.locals.userId
    const result = await cardService.getCard(Number(cardId),userId)
    
    if (result) {
    return res.status(200).send(result)
    } else {
        throw {type:"error", message:"Could not get card"}
    }
}

export const deleteCard:controllersType= async (req,res) => {
    const {id:cardId} = req.query
    const userId = res.locals.userId
    const result = await cardService.deleteCard(Number(cardId),userId)
    
    if (result) {
    return res.status(200).send("Card deleted!")
    } else {
        throw {type:"error", message:"Could not delete card"}
    }
}

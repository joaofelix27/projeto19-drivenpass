import { controllersType, ICredentialData } from '../generics/types/types'
import * as credentialService  from '../services/credentialService'

export const createCredential:controllersType= async (req,res) => {
    const credentialData: ICredentialData = req.body
    const userId = res.locals.userId
    const result = await credentialService.createCredential(credentialData,userId)
    
    if (result) {
    return res.sendStatus(201)
    } else {
        throw {type:"error", message:"Could not create credential"}
    }
}
export const getCredential:controllersType= async (req,res) => {
    const {id:credentialId} = req.query
    const userId = res.locals.userId
    const result = await credentialService.getCredential(Number(credentialId),userId)
    
    if (result) {
    return res.status(200).send(result)
    } else {
        throw {type:"error", message:"Could not get credential"}
    }
}

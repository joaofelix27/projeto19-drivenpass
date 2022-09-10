import * as credentialRepository from '../repositories/credentialRepository'
import Cryptr from 'cryptr';
import { createCredentialType } from '../generics/types/types';
import dotenv from 'dotenv'
dotenv.config()
const cryptr = new Cryptr('myTotallySecretKey');



export const createCredential: createCredentialType= async (credentialData,userId) => {
  const {name,title,password,url}=credentialData
  const alreadyExists=await credentialRepository.findUnique(title,userId);
  console.log(alreadyExists)
  if(alreadyExists.length>0){
    throw {type:"conflict", message:"Credential title already in use!"}
  }
  const encryptedPassword=cryptr.encrypt(password)

  return await credentialRepository.createCredential({...credentialData, password:encryptedPassword},userId)
};

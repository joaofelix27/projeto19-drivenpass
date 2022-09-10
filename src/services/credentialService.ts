import * as credentialRepository from '../repositories/credentialRepository'
import Cryptr from 'cryptr';
import { createCredentialType, getCredentialType } from '../generics/types/types';
import dotenv from 'dotenv'
dotenv.config()
const cryptr = new Cryptr('myTotallySecretKey');



export const createCredential: createCredentialType= async (credentialData,userId) => {
  const {name,title,password,url}=credentialData
  const alreadyExists=await credentialRepository.findUniqueByTitle(title,userId);
  if(alreadyExists.length>0){
    throw {type:"conflict", message:"Credential title already in use!"}
  }
  const encryptedPassword=cryptr.encrypt(password)

  return await credentialRepository.createCredential({...credentialData, password:encryptedPassword},userId)
};

export const getCredential: getCredentialType= async (credentialId,userId) => {
  let credentials;
  if (credentialId){
    credentials=await credentialRepository.findUniqueById(credentialId,userId);
    if (!credentials.length) throw {type:"unauthorized", message:"Cannot acess this credential!"}
  } else {
    credentials=await credentialRepository.findMany(userId);
  }
  const newCredentials =credentials.map( credential => {
   return {...credential,password:cryptr.decrypt (credential.password)}
  })

  return newCredentials
}

export const deleteCredential: getCredentialType= async (credentialId,userId) => {
  const deletedCredential = await credentialRepository.deleteCredential(credentialId,userId)
  const deletedCredentialCount=deletedCredential.count
  if (!deletedCredentialCount) throw {type:"unauthorized", message:"Cannot delete this credential!"}
  return deletedCredentialCount
}

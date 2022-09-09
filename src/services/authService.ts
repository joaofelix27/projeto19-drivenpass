import * as authRepository from '../repositories/authRepository'
import { registerServiceType } from "../generics/types/types";
import bcrypt from 'bcrypt'


export const register: registerServiceType = async ({email, password}) => {
  const alreadyExists=await authRepository.findUnique(email);
  if(alreadyExists){
    throw {type:"conflict", message:"It was not possible to register"}
  }
  const encryptedPassword=bcrypt.hashSync(password,10)
  return await authRepository.createRegister({email,password:encryptedPassword})
};

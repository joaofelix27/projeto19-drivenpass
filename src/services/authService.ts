import * as authRepository from '../repositories/authRepository'
import bcrypt from 'bcrypt'
import { authServiceType } from '../generics/types/types';
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
import { users } from "@prisma/client"
dotenv.config()


export const register: authServiceType = async ({email, password}) => {
  const alreadyExists=await authRepository.findUnique(email);
  if(alreadyExists){
    throw {type:"conflict", message:"It was not possible to register"}
  }
  const encryptedPassword=bcrypt.hashSync(password,10)
  return await authRepository.createRegister({email,password:encryptedPassword})
};

export const login: authServiceType= async ({email, password}) => {
  const emailExists=<users>await authRepository.findUnique(email);
  if(!emailExists){
    throw {type:"unauthorized", message:"It was not possible to login"}
  }
  const verifyPassword=bcrypt.compareSync(password,emailExists?.password)
  const id = emailExists.id
  if (!verifyPassword) throw {type:"unauthorized", message:"It was not possible to login"}
  const returnToken: Partial<users>= {... emailExists}
  delete returnToken?.password;
  const token:any = jwt.sign(returnToken, "opa", {
    expiresIn: 1200 
  });
  return token
};

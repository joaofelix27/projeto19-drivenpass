import * as authRepository from '../repositories/authRepository'
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
import { users } from "@prisma/client"
import { authServiceType } from '../types/auth/authTypes';
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
  const secret:string=(process.env.SECRET)?.toString() || "Secret" ;
  const token= jwt.sign(returnToken, secret, {
    expiresIn: "30d" 
  });
  return token
};

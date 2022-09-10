import * as wifiRepository from '../repositories/wifiRepository'
import Cryptr from 'cryptr';
import { createWifiType, getNoteType, getWifiType } from '../generics/types/types';
import dotenv from 'dotenv'
dotenv.config()
const cryptr = new Cryptr('myTotallySecretKey');



export const createWifi: createWifiType= async (noteData,userId) => {
  const {password}=noteData
  const encryptedPassword=cryptr.encrypt(password)
  return await wifiRepository.createWifi({...noteData, password:encryptedPassword},userId)
};

export const getWifi: getWifiType= async (wifiId,userId) => {
  let wifis;
  if (wifiId){
    wifis=await wifiRepository.findUniqueById(wifiId,userId);
    if (!wifis.length) throw {type:"unauthorized", message:"Cannot acess this Wi-fi!"}
  } else {
    wifis=await wifiRepository.findMany(userId);
  }
  return wifis
}


export const deleteWifi: getNoteType= async (noteId,userId) => {
  const deletedWifi = await wifiRepository.deleteWifi(noteId,userId)
  const deletedWifiCount=deletedWifi.count
  if (!deletedWifiCount) throw {type:"unauthorized", message:"Cannot delete this Wi-fi!"}
  return deletedWifiCount
}

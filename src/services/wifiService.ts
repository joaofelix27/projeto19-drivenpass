import * as wifiRepository from '../repositories/wifiRepository'
import Cryptr from 'cryptr';
import dotenv from 'dotenv'
import { createWifiType, getWifiType } from '../types/wifis/wifisTypes';
dotenv.config()
const cryptr = new Cryptr('myTotallySecretKey');



export const createWifi: createWifiType= async (wifiData,userId) => {
  const {password}=wifiData
  const encryptedPassword=cryptr.encrypt(password)
  return await wifiRepository.createWifi({...wifiData, password:encryptedPassword},userId)
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


export const deleteWifi: getWifiType= async (wifiId,userId) => {
  const deletedWifi = await wifiRepository.deleteWifi(wifiId,userId)
  const deletedWifiCount=deletedWifi.count
  if (!deletedWifiCount) throw {type:"unauthorized", message:"Cannot delete this Wi-fi!"}
  return deletedWifiCount
}

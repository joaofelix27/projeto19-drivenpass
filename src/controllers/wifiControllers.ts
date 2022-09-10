import { controllersType,IWifiData } from '../generics/types/types'
import * as wifiService  from '../services/wifiService'

export const createWifi:controllersType= async (req,res) => {
    const wifiData: IWifiData = req.body
    const userId = res.locals.userId
    const result = await wifiService.createWifi(wifiData,userId)
    
    if (result) {
    return res.sendStatus(201)
    } else {
        throw {type:"error", message:"Could not create Wi-fi"}
    }
}
export const getWifi:controllersType= async (req,res) => {
    const {id:wifiId} = req.query
    const userId = res.locals.userId
    const result = await wifiService.getWifi(Number(wifiId),userId)
    
    if (result) {
    return res.status(200).send(result)
    } else {
        throw {type:"error", message:"Could not get Wi-fi"}
    }
}

export const deleteWifi:controllersType= async (req,res) => {
    const {id:wifiId} = req.query
    const userId = res.locals.userId
    const result = await wifiService.deleteWifi(Number(wifiId),userId)
    if (result) {
    return res.status(200).send("Wi-fi deleted!")
    } else {
        throw {type:"error", message:"Could not delete Wi-fi"}
    }
}

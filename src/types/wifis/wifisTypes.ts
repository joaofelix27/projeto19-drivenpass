import { wifis } from "@prisma/client"



export type IWifiData= Omit <wifis,'id'|'userId'>

export type createWifiType =(
    note:IWifiData,
    userId:number
 ) => Promise<any>
 
 
 
 export type getWifiType =(
    wifiId:number,
    userId:number
 ) => Promise<any>
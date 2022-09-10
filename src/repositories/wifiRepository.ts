import connection from "../db/db";
import { IWifiData  } from "../generics/types/types";

export async function findUniqueByTitle (title:string,userId:number){
    return await connection.wifis.findMany({
        where: {
          title:title,
          userId:userId
        },
      });
}

export async function findUniqueById (id:number,userId:number){
  return await connection.wifis.findMany({
      where: {
        id:id,
        userId:userId
      },
    });
}

export async function findMany (userId:number){
  return await connection.wifis.findMany({
    where: {
      userId:userId
    }
  });
}

export async function createWifi (note:IWifiData,userId:number){
    return await connection.wifis.create ({ data: {...note,userId} });
}

export async function deleteWifi (id:number,userId:number){
  return await connection.wifis.deleteMany ({
    where: {
    id:id,
    userId:userId
  }
})
}
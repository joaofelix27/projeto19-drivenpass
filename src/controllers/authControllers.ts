import { Response,Request } from "express";
import { registerType } from "../generics/interfaces/interface";
import * as authService  from '../services/authService';


export async function register(req:Request,res:Response) {
    const registerData: registerType = req.body
    const {email,password}=registerData
    const result:any = await authService.register()
    
    if (result) {
    return res.sendStatus(201)
    } else {
        throw {type:"error", message:"It was not possible to register"}
    }

}

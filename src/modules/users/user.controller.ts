import { Request, Response } from "express"
import { userServices } from "./user.service"

const createUser =async(req:Request, res:Response)=>{
    const result = await userServices.userCreateIntoDb()
}

export const userController = {
    createUser
}
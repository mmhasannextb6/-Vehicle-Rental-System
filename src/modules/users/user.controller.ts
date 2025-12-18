import { Request, Response } from "express"
import { userServices } from "./user.service"

const getAllUsers =async(req:Request, res:Response)=>{
    const result = await userServices.getAllUsersFromDB()

    res.status(201).send({
        success:true,
        message:"Users retrieved successfully",
        data:result
    })
}

export const userController = {
    getAllUsers
}
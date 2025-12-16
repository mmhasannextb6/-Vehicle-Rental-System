import { Request, Response } from "express"
import { authServices } from "./auth.services"

const signUp = async(req:Request, res:Response)=>{
try{
    const result = await authServices.signUpIntoDB(req.body)
    res.status(201).send({
        success: true,
        message: "User registered successfully",
        data:result.rows[0]
    })
}catch(err:any){
     res.status(500).send({
        success: true,
        message: "User not registered",
        data:{message:err.message},
    })
}

}

const signin = async(req:Request, res:Response)=>{

}


export const authControllers = {
    signUp,
    signin
}
import { Request, Response } from "express"
import { authServices } from "./auth.services"

const signUp = async(req:Request, res:Response)=>{
try{
    const result = await authServices.signUpIntoDB(req.body)
    res.status(200).send({
        success:true,
        message:'signup created successfully',
        data:result.rows[0]
    })
}catch(err:any){
    console.error({message:err.message})
}

}

const signin = async(req:Request, res:Response)=>{

}


export const authControllers = {
    signUp,
    signin
}
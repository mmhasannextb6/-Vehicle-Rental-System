import { Request, Response } from "express"
import { authServices } from "./auth.services"

//signup
const signUp = async(req:Request, res:Response)=>{
try{
    const result = await authServices.signUpIntoDB(req.body)
   return res.status(201).json({
        success: true,
        message: "User registered successfully",
        data:result.rows[0]
    })
}catch(err:any){
     res.status(500).json({
        success: true,
        message: "User not registered",
        data:{message:err.message},
    })
}
}


//login
const signin = async(req:Request, res:Response)=>{
try{
    const result = await authServices.loginUserIntoDB(req.body.email, req.body.password)
    

    res.status(201).json({
        success: true,
        message: "Login successful",
        data:result.rows[0]
    })
}catch(err:any){
     res.status(500).json({
        success: false,
        message: "Logd in not success",
        data:{message:err.message},
    })
}
}


export const authControllers = {
    signUp,
    signin
}
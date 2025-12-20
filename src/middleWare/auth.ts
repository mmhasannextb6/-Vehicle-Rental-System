import { NextFunction, Request, Response } from "express"
import jwt, { JwtPayload } from 'jsonwebtoken'
import { secret } from "../modules/authentication/auth.services"
import { pool } from "../db/initDb"
import { error } from "console"
const auth=(...role:string[])=>{
    console.log('role is here',role)
    return async(req:Request, res:Response, next:NextFunction)=>{
        const token = req.headers.authorization
        if(!token){
            throw  Error(' yor are not authorized user')
        }
        const decoded = jwt.verify(token, secret) as JwtPayload
         console.log(decoded)
        const user = await pool.query(`
                SELECT * FROM users WHERE email=$1
            `, [decoded.email])

            if(user.rows.length===0){
        throw new Error("you have sign up again, previous data deleted")
    }
     
    //for global varialbe
    req.user = decoded
   
    if(role.length ===0 && !role.includes(decoded.role)){
        throw new Error(" your have no role")
    }

        next()
    }
    


}
export default auth
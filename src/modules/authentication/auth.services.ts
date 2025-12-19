import { JwtPayload } from './../../../node_modules/@types/jsonwebtoken/index.d';

import jwt from 'jsonwebtoken'
import { pool } from "../../db/initDb"
import bcrypt from 'bcryptjs'
const signUpIntoDB = async(payload:Record<string, unknown>)=>{
    const {name, email, password, phone, role} = payload
    const hashPassword = await bcrypt.hash(password as string, 12)
    const user = await pool.query(`
        INSERT INTO USERS(name, email, password, phone, role) VALUES ($1, $2, $3, $4, $5) RETURNING * 
        `,[name, email, hashPassword, phone, role])
    delete user.rows[0].password
    return user;
}

const loginUserIntoDB =async(email:string, password:string)=>{
    const user = await pool.query(`
            SELECT * FROM users WHERE email=$1
        `,[email])

    // if not user
if(user.rows.length===0){
        throw new Error("user not credencials, please sighup first")
    }
    //inf password not matched
const mathchPassword= await bcrypt.compare(password, user.rows[0].password)
  if(!mathchPassword){
    throw new Error("Your password is wrong, please provide right password")
  }

//if user authenticated then jwt
const JwtPayload = {
id:user.rows[0].id,
name:user.rows[0].name,
email:user.rows[0].email
}
const secretKey = `KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30-QV30`

const token = jwt.sign(JwtPayload,secretKey,{expiresIn:'3d'})













// console.log(token)
       return {token, user:user.rows[0]}
}

export const authServices = {
    signUpIntoDB,
    loginUserIntoDB
}
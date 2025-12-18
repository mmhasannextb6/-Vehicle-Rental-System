import { error } from "console"
import { pool } from "../../db/initDb"
import bcrypt from 'bcryptjs'
const signUpIntoDB = async(payload:Record<string, unknown>)=>{
    const {name, email, password, phone, role} = payload
    const hashPassword = await bcrypt.hash(password as string, 12)
    const result = await pool.query(`
        INSERT INTO USERS(name, email, password, phone, role) VALUES ($1, $2, $3, $4, $5) RETURNING * 
        `,[name, email, hashPassword, phone, role])
    delete result.rows[0].password
    return result;
}

const loginUserIntoDB =async(email:string, password:string)=>{
    const result = await pool.query(`
            SELECT * FROM users WHERE email=$1
        `,[email])


if(result.rows.length===0){
        throw new Error("user not credencials, please sighup first")
    }
        const mathchPassword= await bcrypt.compare(password, result.rows[0].password)
  if(!mathchPassword){
    throw new Error("Your password is wrong, please provide right password")
  }
       return result
}

export const authServices = {
    signUpIntoDB,
    loginUserIntoDB
}
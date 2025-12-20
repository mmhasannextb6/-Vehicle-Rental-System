import { pool } from "../../db/initDb"

const getAllUsersFromDB = async()=>{

    const result = await pool.query(`
        SELECT name , email, phone, role from users
        `)
    
        return result.rows
}



const getSingleUserFRomDB = async(email:string)=>{
    
    const result = await pool.query(`
        SELECT name , email, phone, role from users WHERE email=$1
        `,[email])
    
        return result
}
export const userServices = {
    getAllUsersFromDB,
    getSingleUserFRomDB
}
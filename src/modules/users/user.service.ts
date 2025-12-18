import { pool } from "../../db/initDb"

const getAllUsersFromDB = async()=>{
    const result = await pool.query(`
        SELECT name , email, phone, role from users
        `)
    
        return result.rows
}

export const userServices = {
    getAllUsersFromDB
}
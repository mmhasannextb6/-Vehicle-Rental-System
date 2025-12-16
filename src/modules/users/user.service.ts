import { pool } from "../../db/initDb"

const getAllUsersFromDB = async()=>{
    const result = await pool.query(`
        SELECT * FROM users
        `)
        //have to fix , password come to front end, it has to ban
        delete result.rows[0].password
        return result
}

export const userServices = {
    getAllUsersFromDB
}
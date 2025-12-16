import { pool } from "../../db/initDb"

const createBookingIntoDb=async()=>{
    const result = await pool.query(``)
}

export const bookingServices = {
    createBookingIntoDb
}
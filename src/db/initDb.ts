
import {Pool} from 'pg'
import { configEnv } from '../config/config';
export const pool = new Pool({
    connectionString:configEnv.connectionString
})

export const initDB=async()=>{
await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    email VARCHAR(200) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    CHECK (LENGTH(password) >= 6),
    phone VARCHAR(15) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    role VARCHAR(200) NOT NULL CHECK(role IN ('admin', 'customer'))
    );
 `);


 await pool.query(`
    
    CREATE TABLE IF NOT EXISTS vehicles(
    id SERIAL PRIMARY KEY,
    vehicle_name VARCHAR(200) NOT NULL,
    type VARCHAR(200) NOT NULL,
    registration_number INT NOT NULL UNIQUE,
    daily_rent_price NUMERIC CHECK(daily_rent_price>0),
    availability_status VARCHAR(20) NOT NULL
    )
       
    `)


    await pool.query(`
    
    CREATE TABLE IF NOT EXISTS bookings(
    ID SERIAL PRIMARY KEY,
    customer_id INT REFERENCES users(id) ON DELETE CASCADE,
    vehicle_id INT REFERENCES vehicles(id),
    vehicle_name VARCHAR(200) NOT NULL,
    type VARCHAR(20) NOT NULL CHECK(type IN('car', 'bike', 'van','SUV')),
    registration_number INT NOT NULL UNIQUE,
    rent_start_date DATE NOT NULL,
    rent_end_date DATE NOT NULL,
    total_price NUMERIC NOT NULL CHECK(total_price>0),
    status VARCHAR(20) NOT NULL CHECK (status IN ('active', 'cancelled','returned'))
    )
       
    `)
 console.log("database connected")
}
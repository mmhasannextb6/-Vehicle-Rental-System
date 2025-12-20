import dotenv from 'dotenv'
import path from 'path'
import { cwd } from 'process'
dotenv.config({path: path.join(cwd(),'.env' )})

export const configEnv ={
    connectionString:process.env.connectionString,
    port:process.env.port,
    // secret:process.env.secretKey
}
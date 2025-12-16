import { Request, Response } from "express"
import { vehicleServices } from "./vehicles.services"

const addVehicle = async(req:Request, res:Response)=>{
    const result = await vehicleServices.addVehicleIntoDB()
}

export const vehicleControllers = {
addVehicle
}
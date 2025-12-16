import express from 'express'
import { vehicleControllers } from './vehicles.controller'

const router = express.Router()

//Add new vehicle with name, type, registration, daily rent price and availability status
router.post('/vehicles', vehicleControllers.addVehicle)

export const vehicleRouter = router